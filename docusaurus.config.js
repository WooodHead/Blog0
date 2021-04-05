const { appendPath, getFirstContent } = require('./src/utils');
const { CATEGORY_SLUGS } = require('./src/constants');

const docNavs = Object.entries(CATEGORY_SLUGS).map(([category, categorySlug]) => ({
  to: getFirstContent(category),
  activeBasePath: appendPath('docs', category),
  label: categorySlug,
}));
console.log('docNavs', docNavs);

const docFooters = docNavs.map(({ to, label }) => ({ to, label }));
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    // algolia: {
    //   apiKey: 'df534cd50449ff1ac456585231e62076',
    //   indexName: 'til',
    //   appId: 'CPGK41PHIV',
    // },
    // colorMode: {
    // defaultMode: 'dark',
    // },
    hideableSidebar: true,
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl'),
    },
    navbar: {
     title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Docs',
          position: 'left',
          items: [...docNavs],
        },
        {
          label: 'Logs',
          position: 'left',
          items: [
            { to: 'log/2021', label: '2021 Log' },
            { to: 'log/2020', label: '2020 Log' },
          ],
        },
        {
          href: 'https://github.com/younho9/til',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href:
            'https://www.notion.so/younho9/107dc84223664f60b21a61f55b2700a4?v=e848ff1783f44fc7b1d499740e16c46c',
          position: 'right',
          className: 'header-notion-link',
          'aria-label': 'Notion CMS',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [...docFooters],
        },
        {
          title: 'Logs',
          items: [
            {
              label: '2021 Log',
              to: 'log/2021',
            },
            {
              label: '2020 Log',
              to: 'log/2020',
            },
          ],
        },
        {
          title: 'Personal Links',
          items: [
            {
              label: 'younho9.dev',
              href: 'https://younho9.dev',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/younho9',
            },
            {
              label: 'Notion',
              href: 'https://bit.ly/yh9blog',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/younho_9',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/story/younho9',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/younho9/til',
            },
            {
              label: 'Notion',
              href:
                'https://www.notion.so/younho9/107dc84223664f60b21a61f55b2700a4?v=e848ff1783f44fc7b1d499740e16c46c',
            },
            {
              html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
                </a>
              `,
            },
          ],
        },
      ],
      logo: {
        alt: 'younho9',
        src: 'img/logo.png',
        href: 'https://younho9.dev/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} younho9. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
