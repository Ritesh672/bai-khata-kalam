import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.baikhatakalam.com';

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

// Per-page <head> tags: title, description, canonical URL, optional noindex and structured data.
// Open Graph defaults live in public/index.html because social crawlers don't run JavaScript.
const PageMeta = ({ title, description, path, noindex = false, jsonLd }) => {
  const showBreadcrumb = path && path !== '/' && !noindex;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {path && <link rel="canonical" href={`${SITE_URL}${path}`} />}
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
      {showBreadcrumb && <script type="application/ld+json">{JSON.stringify(breadcrumbFor(path, title))}</script>}
    </Helmet>
  );
};

export default PageMeta;
