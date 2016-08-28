module.exports = {
  styleguide: {
    snippetLanguage: 'html',
    colors: './content/scss/settings/_colors.scss',
    showIndividualComponentsInNav: false,
    categoryOrder: [
      'Style guide',
      'Patterns',
      'Overviews',
      'Components',
    ]
  },
  icons: {
    generateIconsFromSource: true,
  },
  jade: {
    pretty: true,
    basedir: "./content"
  },
  prettify: {
    logSuccess: false,
      indentSize: 2,
      unformatted: ['pre', 'textarea'],
      extraLiners: ['body']
  },
  modernizr: {
    minify: true,
    options: [
      'setClasses'
    ],
    'feature-detects': [
      'test/css/flexbox'
    ]
  }
};
