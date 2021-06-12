const autoprefixer = require('autoprefixer')

const config = {
  overrideBrowserslist: [
    'defaults' 
  ]
}

module.exports = {
  plugins: [
    require('autoprefixer')(config)
  ],
  options: {
      sourceMap: true
  }
}
