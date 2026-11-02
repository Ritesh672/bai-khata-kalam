// Runs after `react-scripts build`. The app renders in the browser, so every URL would otherwise get the
// same <head> from index.html. This writes one HTML file per page (about.html, team.html, ...) carrying
// that page's title, description, canonical URL and social preview, so WhatsApp, Facebook, LinkedIn and
// Bing see the right tags without running JavaScript. It also writes sitemap.xml from the same data.
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { siteUrl, defaultImage, pages } = require('../src/data/seo.json');

const BUILD = path.join(__dirname, '..', 'build');
const shell = fs.readFileSync(path.join(BUILD, 'index.html'), 'utf8');

const escape = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Replace exactly one tag; fail the build loudly if index.html no longer has it.
const replaceOnce = (html, pattern, replacement) => {
  const matches = html.match(new RegExp(pattern.source, 'g')) || [];
  if (matches.length !== 1) throw new Error(`prerender-meta: expected one match for ${pattern}, found ${matches.length}`);
  return html.replace(pattern, replacement);
};

const setContent = (html, attr, name, value) =>
  replaceOnce(html, new RegExp(`<meta ${attr}="${name}" content="[^"]*"`), `<meta ${attr}="${name}" content="${escape(value)}"`);

const render = ({ title, description, path: pagePath, noindex, image = defaultImage }) => {
  const url = `${siteUrl}${pagePath}`;
  let html = replaceOnce(shell, /<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`);
  html = replaceOnce(html, /<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`);
  html = setContent(html, 'name', 'robots', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large');
  html = setContent(html, 'property', 'og:url', url);
  html = setContent(html, 'property', 'og:title', title);
  html = setContent(html, 'name', 'twitter:title', title);
  html = setContent(html, 'property', 'og:image', `${siteUrl}${image.src}`);
  html = setContent(html, 'name', 'twitter:image', `${siteUrl}${image.src}`);
  html = setContent(html, 'property', 'og:image:alt', image.alt);
  if (description) {
    html = setContent(html, 'name', 'description', description);
    html = setContent(html, 'property', 'og:description', description);
    html = setContent(html, 'name', 'twitter:description', description);
  }
  return html;
};

// "/vidyasagar-vidyapith" -> vidyasagar-vidyapith.html (served at the clean URL by vercel.json)
const fileFor = (pagePath) => (pagePath === '/' ? 'index.html' : `${pagePath.slice(1)}.html`);

const routed = Object.values(pages).filter((page) => page.path);
routed.forEach((page) => fs.writeFileSync(path.join(BUILD, fileFor(page.path)), render(page)));

// The sitemap's lastmod is the date of the latest commit, falling back to today outside git.
let lastmod;
try {
  lastmod = execSync('git log -1 --format=%cs', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
} catch {
  lastmod = '';
}
if (!/^\d{4}-\d{2}-\d{2}$/.test(lastmod)) lastmod = new Date().toISOString().slice(0, 10);

const urls = routed
  .filter((page) => !page.noindex)
  .map((page) => `  <url><loc>${siteUrl}${page.path}</loc><lastmod>${lastmod}</lastmod></url>`);
fs.writeFileSync(
  path.join(BUILD, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
);

console.log(`prerender-meta: wrote ${routed.length} page files and a sitemap with ${urls.length} URLs (lastmod ${lastmod}).`);
