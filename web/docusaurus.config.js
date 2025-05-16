// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HAKE",
  tagline: "Hyper Automation and Knowledge Enhancement",
  url: "https://hakebot.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "boluart", // Usually your GitHub org/user name.
  projectName: "hakebot-web", // Usually your repo name.
  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve("./sidebars.js"),
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/link-facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },       
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/edit-facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],


  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      navbar: {
        title: "Inicio",
        logo: {
          alt: "HAKE Bot Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Productos",
          }, 
          { to: "/api", label: "Referencia del API", position: "left" },
          // { to: "/contact", label: "Contacto", position: "left" },
          // { to: "/blog", label: "Blog", position: "left" },
          // {
          //   href: "https://facebook.com/tuempresa",
          //   position: "right",
          //   className: "navbar-icon-link",
          //   'aria-label': 'Facebook',
          // },
          // {
          //   href: "https://youtube.com/tuempresa",
          //   position: "right",
          //   className: "navbar-icon-link",
          //   'aria-label': 'YouTube',
          // },
          {
            href: "https://www.linkedin.com/in/boluart/",
            position: "right",
            className: "navbar-icon-link",
            'aria-label': 'Linkedin',
          },          
          {
            href: "https://github.com/boluart/",
            position: "right",
            className: "navbar-icon-link",
            'aria-label': 'GitHub',
          },
          // {
          //   href: "https://github.com/boluart/captcha-solver",
          //   position: "right",
          //   className: "navbar-icon-link",
          //   'aria-label': 'Instagram',
          // },  
          {
            href: "https://api.whatsapp.com/send/?phone=51990805287&text=Hola%20quiero%20más%20información%20sobre%20el%20API%20ByeCaptcha&app_absent=0",
            position: "right",
            className: "navbar-icon-link",
            'aria-label': 'Whatsapp',
          },                        
        ],
      },
      // footer: {
      //   style: "dark",
      //   links: [
      //     {
      //       title: "Docs",
      //       items: [
      //         {
      //           label: "Tutorial",
      //           to: "/docs/intro",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Community",
      //       items: [
      //         {
      //           label: "Stack Overflow",
      //           href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //         },
      //         {
      //           label: "Discord",
      //           href: "https://discordapp.com/invite/docusaurus",
      //         },
      //         {
      //           label: "Twitter",
      //           href: "https://twitter.com/docusaurus",
      //         },
      //       ],
      //     },
      //     {
      //       title: "More",
      //       items: [
      //         {
      //           label: "Blog",
      //           to: "/blog",
      //         },
      //         {
      //           label: "GitHub",
      //           href: "https://github.com/facebook/docusaurus",
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
