const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'me@herobuxx.me - Free WhatsApp API Gateway',
  tagline: 'WhatsAuth',
  favicon: 'img/favicon.ico',
  url: 'https://SWIFT64.github.io',
  baseUrl: '/test',
  organizationName: 'SWIFT64',
  projectName: 'whatsauth',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'WhatsAuth',
        logo: {
          alt: 'IRC Logo',
          src: 'img/irc.png',
        },
        items: [
          {
            href: 'https://SWIFT64.github.io',
            label: 'Website',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Persiapan',
                to: '/docs/persiapan',
              },
              {
                label: 'Persiapan',
                to: '/docs/pendaftaran'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/WhatsAuth'
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Halcyon Project.<br><span style="color:var(--ifm-footer-link-color);display:inline-block;padding-top:1em">Licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0.</a></span>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }
    }),
};

module.exports = config;
