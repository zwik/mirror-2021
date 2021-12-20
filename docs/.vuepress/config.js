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
    repo: 'zwik/mirror-2021',
    docsDir: 'docs',
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
              },
              {
                text: 'Het Begin',
                link: '/dag1',
              },
              {
                text: 'Vlak Maken',
                link: '/dag2',
              },
              {
                text: 'Is Het Vlak?',
                link: '/dag3',
              },
              {
                text: 'Eindelijk Vlak',
                link: '/dag4',
              },
              {
                text: 'Begonnen Met Uitdiepen',
                link: '/dag5',
              },
              {
                text: 'Korte Avond',
                link: '/dag6',
              },
              {
                text: 'Verder De Diepte In',
                link: '/dag7',
              },
              {
                text: 'Correctie Van De Curve',
                link: '/dag8',
              },
              {
                text: 'Pijn',
                link: '/dag9',
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
              },
              {
                text: 'The Beginning',
                link: '/en/day1',
              },
              {
                text: 'Flattening',
                link: '/en/day2',
              },
              {
                text: 'Is It Flat?',
                link: '/en/day3',
              },
              {
                text: 'Finally Flat',
                link: '/en/day4',
              },
              {
                text: 'Started Hogging',
                link: '/en/day5',
              },
              {
                text: 'Short Evening',
                link: '/en/day6',
              },
              {
                text: 'Going Deeper',
                link: '/en/day7',
              },
              {
                text: 'Correction Of The Curve',
                link: '/en/day8',
              },
              {
                text: 'Pain',
                link: '/en/day9/',
              },
            ],
          },
        ],
      },
    },
  },
}