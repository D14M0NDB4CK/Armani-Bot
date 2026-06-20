// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Armani Bot',
  favicon: 'img/favicon/favicon.ico',

  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  organizationName: 'CountBBs Cavern',
  projectName: 'Armani Bot', 
  // Broken Links
  onBrokenLinks: 'throw',
  markdown: {
  hooks: {
    onBrokenMarkdownLinks: 'warn',
  },
},
  // Language
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'da', 'zh', 'de', 'fr', 'hi'
    ],
  },

  /*_____Header______*/

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          
          
        },
        blog: {
          routeBasePath: 'Updates',
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/brand/armanibot-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Armani Bot',
        logo: {
          alt: 'Armani Bot Logo',
          src: 'img/armanibot/armanibot_headshot.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'About Us',
            position: 'left',
            label: 'About',
          },
          {to: '/Updates', label: 'Updates', position: 'left'},
          {
            href: 'https://discord.gg/5e2vk6wf3u',
            label: 'Support',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },

      /*__________*/

      /*_____Footer______*/

      footer: {
        style: 'dark',
        logo: {
          alt: 'Armani Bot Logo',
          src: 'img/armanibot/relaxing_ledge.png',
          href: '#',
          width: 80,
          height: 80,
        },
        links: [
          {
            title: 'Service',
            items: [
              {
                label: 'Invite Armani Bot',
                href: '#',
              },
              {
                label: 'Command List',
                to: '/docs/About Armani Bot/Commands',
              },
              {
                label: 'Updates & Bug Fixes',
                to: '/Updates',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'CountBBs Cavern',
                href: 'https://discord.gg/5e2vk6wf3u',
              },
              {
                label: 'CountBBs Twitch',
                href: 'https://www.twitch.tv/countbbs',
              },
              {
                label: 'D14M0NDB4CKs Twitch',
                href: 'https://www.twitch.tv/d14m0ndb4cks',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Updates',
                to: '/Updates',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/armanibot',
              },
            ],
          },
          {
            title: 'Legal ',
            items: [
              {
                label: 'Privacy Policy',
                href: 'https://github.com/armanibot/armanibot-website/blob/main/privacy-policy.md',
              },
              {
                label: 'Terms of Service',
                href: 'https://github.com/armanibot/armanibot-website/blob/main/terms-of-service.md',
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Armani Bot.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    /*__________*/
};

export default config;
