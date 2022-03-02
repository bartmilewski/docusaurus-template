module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'your-org', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "NavVis",
      logo: {
        alt: "NavVis Logo",
        src: "img/IVION-Logo-negative.svg",
      },
    },
    hideableSidebar: true, // Remove to hide the left pane
    //sidebarCollapsible: false, // Remove to disable the left-pane collapse/expand button
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} NavVis GmbH.`,
    },
    // The following determines the dark/light mode switch styling
    colorMode: {
      respectPrefersColorScheme: true,
      switchConfig: {
        lightIcon: "\u{25CB}",
        darkIcon: "\u{25CF}",
        darkIconStyle: {
          color: `#f4f4f4`,
        },
        lightIconStyle: {
          color: `#f4f4f4`,
        },
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: false,
        pages: false,
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: './docs',
          routeBasePath: '/',
           "remarkPlugins": require('./src/remark/convertYoutubeEmbeds.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'),{}]
  ],
};
