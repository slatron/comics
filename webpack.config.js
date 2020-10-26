const path = require('path')
const getFilesFromDir = require('./config/files')
const PAGE_DIR = path.join('src', 'pages', path.sep)

const jsFiles = getFilesFromDir(PAGE_DIR, ['.js'])
const entry = jsFiles.reduce((obj, filePath) => {
  const entryChunkName = filePath.replace(path.extname(filePath), '').replace(PAGE_DIR, '')
  obj[entryChunkName] = `./${filePath}`
  return obj
}, {})

const HTMLWebPackPlugin = require("html-webpack-plugin")
const htmlFiles = getFilesFromDir(PAGE_DIR, ['.html'])

const htmlPlugins = htmlFiles.map(filePath => {
  const fileName = filePath.replace(PAGE_DIR, '')
  return new HTMLWebPackPlugin({
    chunks: [fileName.replace(path.extname(fileName), ''), 'vendor'],
    // chunks: ['main', 'vendor'],
    template: filePath,
    filename: fileName
  })
})

module.exports = (env, argv) => {
  // This will be replaces by the actual tag version from the commoand line
  // - TODO: How to read passed string through gulp
  const tag = argv.tag || '0.0.0'

  return {

    // Create js bundle for each page:
    entry,

    // Uncomment this to bundle all js into one main.tag.js file
    // - This would be a large single download like the current application
    // - as opposed to one js file per page
    // entry: {
    //   main: './src/pages/index.js'
    // },

    // generates js files for pages
    output: {
      path: path.resolve(__dirname, "app"),
      filename: `[name].${tag}.js`
    },

    // Put each html page in its own file
    plugins:[...htmlPlugins],

    // Create alias for reslving pathname imports
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, 'src', 'components'),
        pages: path.resolve(__dirname, 'src', 'pages')
      }
    },

    // Precompile JS into ES5 for browser compatability
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        }
      ]
    },

    // Split unchanging vendor files into seprate bundle
    optimization: {
      minimize: argv.mode === 'production' ? true : false,
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'vendor',
            enforce: true
          }
        }
      }
    }

  } // End webpack.config object returned
}
