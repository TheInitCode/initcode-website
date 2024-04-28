const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Init Code",
    tagline: "Init Code",
    url: "https://theinitcode.github.io/",
    baseUrl: "/initcode-website/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    projectName: "init-code",

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
          title: "Init Code",
          logo: {
            alt: "Init Code Logo",
            src: "logo-light.svg",
            srcDark: "logo-dark.svg",
          },
          items: [
            {
              type: "doc",
              docId: 'Cursos/git',
              label: "Mais informações",
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
