import React from 'react';
import { Helmet } from 'react-helmet-async';
import seo from '../../data/seo.json';

const { siteUrl: SITE_URL, defaultImage, pages } = seo;

// "About Bai Khata Kalam | NGO in ..." -> "About Bai Khata Kalam"
const shortName = (title) => title.split(' | ')[0];

// Home > Page breadcrumb (structured data), added automatically for every indexable inner page.
const breadcrumbFor = (path, title) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: shortName(title), item: `${SITE_URL}${path}` },
  ],
});

// Per-page <head> tags, read from data/seo.json: title, description, canonical URL, social preview,
// optional noindex and structured data. scripts/prerender-meta.js writes the same tags into each
// page's HTML file at build time, so crawlers that don't run JavaScript see them too.
const PageMeta = ({ page, jsonLd }) => {
  const { title, description, path, noindex = false, image = defaultImage } = pages[page];
  const url = path && `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}${image.src}`;
  const showBreadcrumb = path && path !== '/' && !noindex;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {url && <link rel="canonical" href={url} />}
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={image.alt} />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={imageUrl} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
      {showBreadcrumb && <script type="application/ld+json">{JSON.stringify(breadcrumbFor(path, title))}</script>}
    </Helmet>
  );
};

export default PageMeta;
