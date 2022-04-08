module.exports = {
  purge: false,
  content: ["./styles/**/*.{html,js,less}"],
  theme: {
    fontFamily: {
      'sans': '"LatoLatinWeb", IRANYekan, ui-sans-serif, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      'siftal': 'siftal',
      'mono': ['ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'],
      'IRANSansX': 'IRANSansX',
      'IRANYekan': 'IRANYekan',
      'LatoLatinWeb': 'LatoLatinWeb',
      'Vazir': 'Vazir',
      'tahoma': 'tahoma',
      'GanjNamehSans': 'GanjNamehSans',
      'NikaWeb': 'NikaWeb',
      'BehdadWeb': 'BehdadWeb',
      'WebNastaliq': 'WebNastaliq',
      'Lalezar': 'Lalezar',
    },
    extend: {
      fontSize: {
        '2xs': ['.625rem', '0.75rem']
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '16/9': '16 / 9',
        '32/9': '32 / 9',
        '64/9': '64 / 9',

        '1/1': '1 / 1',
        '2/1': '2 / 1',
        '3/1': '3 / 1',
        '4/1': '4 / 1',
        '5/3': '5 / 3',
        '16/10': '16 / 10',
        '16/10': '16 / 10',
        '19/10': '19 / 10',
        '64/27': '64 / 27',

        '9/16': '9 / 16',
        '2/3': '2 / 3',
        '3/4': '3 / 4',
        '4/5': '4 / 5',
      },
    },
  },
  plugins: [],
}
