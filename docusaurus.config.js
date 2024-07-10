const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Init Code",
    tagline: "Init Code",
    url: "https://initcode.com.br/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "/img/logo.ico",
    projectName: "init-code",

    stylesheets:[
      "css/custom.css",
    ],
    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          hideOnScroll: true,
          title: "Init Code",
          logo: {
            alt: "Init Code Logo",
            src: "logo-light.svg",
            srcDark: "logo-dark.svg",
          },
          items: [
            {
              type: "doc",
              docId: 'cursos/node',
              position: 'left',
              label: "NodeJS",
            },
            {
              type: "doc",
              docId: 'cursos/git',
              position: 'left',
              label: "Git e GitHub",
            },
            {
              type: "doc",
              docId: 'cursos/csharp',
              position: 'left',
              label: "C#",
            },
            {
              type: "doc",
              docId: 'cursos/cpp',
              position: 'left',
              label: "C++",
            },
            {
              type: "doc",
              docId: 'cursos/mini',
              position: 'left',
              label: "Outros cursos",
            },
            {
              type: "doc",
              docId: 'recomendacoes/recomendacoes',
              label: "Recomendações",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Confira",
              items: [
                {
                  label: "GitHub Exemplos",
                  href: "https://github.com/initcodeexemplos",
                },
              ],
            },
            {
              title: "Siga-nos também em:",
              items: [
                {
                  label: "Youtube",
                  href: "https://www.youtube.com/channel/UCdHlZugvc3w3hfHBSTLTD5w?sub_confirmation=1",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/init_code/",
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/people/Init-Code/61556939284040/",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Init Code`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        colorMode: {
          defaultMode: "dark",
          disableSwitch: true
        },
      }),
  }
);
