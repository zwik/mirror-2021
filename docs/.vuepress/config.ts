const { defaultTheme, viteBundler } = require('vuepress')

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
  theme: defaultTheme({
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
              {
                text: 'Nieuwe Tafel',
                link: '/dag10',
              },
              {
                text: 'Nog Een Correctie',
                link: '/dag11',
              },
              {
                text: 'Nog Een Klein Stukje',
                link: '/dag12',
              },
              {
                text: 'De Tweede Mijlpaal',
                link: '/dag13',
              },
              {
                text: 'Fijner Slijpen',
                link: '/dag14',
              },
              {
                text: 'Kleine Onderbreking',
                link: '/dag15',
              },
              {
                text: 'Vlakke Achterkant',
                link: '/dag16',
              },
              {
                text: 'Verder Met 180 En Inspectie',
                link: '/dag17',
              },
              {
                text: '180 Klaar',
                link: '/dag18',
              },
              {
                text: 'Correctie 180',
                link: '/dag19',
              },
              {
                text: 'Poeder 320',
                link: '/dag20',
              },
              {
                text: 'Laatste Putje',
                link: '/dag21',
              },
              {
                text: 'Putje Weg',
                link: '/dag22',
              },
              {
                text: 'Kurk',
                link: '/dag23',
              },
              {
                text: 'Kras Reparatie',
                link: '/dag24',
              },
              {
                text: 'Weer Een Kras',
                link: '/dag25',
              },
              {
                text: 'Meevaller',
                link: '/dag26',
              },
              {
                text: 'Buiten',
                link: '/dag27',
              },
              {
                text: 'Een Stapje Terug',
                link: '/dag28',
              },
              {
                text: 'Een Stap Dichter Bij Polijsten',
                link: '/dag29',
              },
              {
                text: 'Geen Problemen',
                link: '/dag30',
              },
              {
                text: 'Lekker Geslepen',
                link: '/dag31',
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
                link: '/en/day9',
              },
              {
                text: 'New Table',
                link: '/en/day10',
              },
              {
                text: 'Another Correction',
                link: '/en/day11',
              },
              {
                text: 'Almost There',
                link: '/en/day12',
              },
              {
                text: 'The Second Milestone',
                link: '/en/day13',
              },
              {
                text: 'Finer Grinding',
                link: '/en/day14',
              },
              {
                text: 'Small Break',
                link: '/en/day15',
              },
              {
                text: 'Flat Back',
                link: '/en/day16',
              },
              {
                text: 'Continue With 180 And Inspection',
                link: '/en/day17',
              },
              {
                text: 'Finished 180',
                link: '/en/day18',
              },
              {
                text: 'Correction 180',
                link: '/en/day19',
              },
              {
                text: 'Grit 320',
                link: '/en/day20',
              },
              {
                text: 'Last Pit',
                link: '/en/day21',
              },
              {
                text: 'Pit Gone',
                link: '/en/day22',
              },
              {
                text: 'Cork',
                link: '/en/day23',
              },
              {
                text: 'Scratch Removal',
                link: '/en/day24',
              },
              {
                text: 'Another Scratch',
                link: '/en/day25',
              },
              {
                text: 'Lucky',
                link: '/en/day26',
              },
              {
                text: 'Outside',
                link: '/en/day27',
              },
              {
                text: 'A Step Back',
                link: '/en/day28',
              },
              {
                text: 'A Step Closer To Polishing',
                link: '/en/day29',
              },
              {
                text: 'No Problems',
                link: '/en/day30',
              },
              {
                text: 'Pleasant Grinding',
                link: '/en/day31',
              },
            ],
          },
        ],
      },
    },
  }),
  bundler: viteBundler({
    // vite bundler config
  })
}
