module.exports = {
  themeConfig: {
    // sidebar array
    // all pages will use the same sidebar
    sidebar: [
      // SidebarItem
      {
        text: 'Slijpen Van Een 10" Spiegel',
        link: '/',
        children: [
          // SidebarItem
          {
            text: 'Aankoop Spiegel',
            link: '/aankoop',
            children: [],
          },
          {
            text: 'Het Begin',
            link: '/dag1',
            children: [],
          },
        ],
      },
    ],
  },
}