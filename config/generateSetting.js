const path = require('path')
const PAGE_DIR = path.join('src', 'pages', path.sep)
const HTMLWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: (jsFiles) => jsFiles.reduce((obj, filePath) => {
    const entryChunkName = filePath.replace(path.extname(filePath), '').replace(PAGE_DIR, '')
    obj[entryChunkName] = `./${filePath}`
    return obj
  }, {}),

  htmlPlugins: (htmlFiles) => htmlFiles.map(filePath => {
    const fileName = filePath.replace(PAGE_DIR, '')
    return new HTMLWebPackPlugin({
      chunks: [fileName.replace(path.extname(fileName), ''), 'vendor'],
      // Uncomment this to bundle all js into one main.tag.js file
      // - connects each html page to one main.js file
      // chunks: ['main', 'vendor'],
      template: filePath,
      filename: fileName
    })
  })
}
