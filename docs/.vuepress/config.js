module.exports = {
  themeConfig: {
    // sidebar array
    // all pages will use the same sidebar
    sidebar: [
      // SidebarItem
      {
        text: 'Slijpen van een 10" spiegel',
        link: '/',
        children: [
          // SidebarItem
          {
            text: 'Aankoop spiegel',
            link: '/aankoop',
            children: [],
          },
          {
            text: 'Het begin',
            link: '/dag1',
            children: [],
          },
        ],
      },
    ],
  },
}