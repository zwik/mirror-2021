module.exports = {
  locales: {
    '/': {
      lang: 'nl-NL',
      title: 'Slijpen Van Een 10 inch Spiegel',
      description: 'Slijpen Van Een 10 inch Spiegel',
    },
    '/en': {
      lang: 'en-US',
      title: 'Making A 10 inch Mirror',
      description: 'Making A 10 inch Mirror',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        selectLanguageName: 'Dutch',
        sidebar: [
          {
            text: 'Slijpen Van Een 10 inch Spiegel',
            link: '/',
            children: [
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
      '/en': {
        selectLanguageName: 'English',
        sidebar: [
          {
            text: 'Making A 10 inch Mirror',
            link: '/en',
            children: [
              {
                text: 'Buying A Blank',
                link: '/en/purchase',
                children: [],
              },
              {
                text: 'The Beginning',
                link: '/en/day1',
                children: [],
              },
            ],
          },
        ],
      },
    },
  },
}