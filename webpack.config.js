const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const generateSetting = require('./config/generateSetting')
const getFilesFromDir = require('./config/files')
const PAGE_DIR = path.join('src', 'pages', path.sep)

// Generate entry setting for javscript files in PAGE_DIR
// const jsFiles = getFilesFromDir(PAGE_DIR, ['.js'])
// const entry = generateSetting.entry(jsFiles)

// Generate entry setting for html files in PAGE_DIR
const htmlFiles = getFilesFromDir(PAGE_DIR, ['.html'])
const htmlPlugins = generateSetting.htmlPlugins(htmlFiles)

module.exports = (env, argv) => {
  return {
    devtool: 'source-map',
    // Create js bundle for each page:
    entry: { index: './src/pages/index.js' },

    // generates js files for pages
    output: {
      path: path.resolve(__dirname, "app"),
      filename: `[name].js`
    },

    // Put each html page in its own file
    plugins:[
      ...htmlPlugins,
      require('autoprefixer'),
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src', 'images'),
            to: 'assets/images/'
          }
        ]
      })
    ],

    // Create alias for reslving pathname imports
    // - this allows for non-relative imports
    // - import 'components/foo' instead of import '../../../components/foo'
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
        api: path.resolve(__dirname, 'src', 'api'),
        components: path.resolve(__dirname, 'src', 'components'),
        hooks: path.resolve(__dirname, 'src', 'hooks'),
        store: path.resolve(__dirname, 'src', 'store'),
        pages: path.resolve(__dirname, 'src', 'pages'),
        styles: path.resolve(__dirname, 'src', 'styles'),
        utils: path.resolve(__dirname, 'src', 'utils')
      }
    },

    // Precompile JS into ES5 for browser compatability
    module: {
      rules: [
        {
          test: /\.(gif|png|svg|jpg)$/,
          exclude: path.resolve(__dirname, './src/fonts'),
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        },
        {
          test: /\.(ttf|eot|woff|woff2|svg)$/,
          include: path.resolve(__dirname, './src/fonts'),
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              esModule: false
            },
          },
        },
        // Uncomment to support plain css files
        // {
        //   test: /\.css$/,
        //   use: ["style-loader", "css-loader", "postcss-loader"]
        // },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
            {
              loader:  "postcss-loader"
            },
            {
              loader: "resolve-url-loader"
            },
            {
              loader: "sass-loader",
              options: {
                  sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },

    // Split vendor files into seprate bundle
    // - These files do not change often and should be cached separately
    // - Affects "dependencies" packages in package.js
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
    },

    target: ['web', 'es5']
  } // End webpack.config object returned
}
