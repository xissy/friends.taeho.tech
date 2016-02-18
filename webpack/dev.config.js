var path = require('path');
var webpack = require('webpack');
var babelConfig = require('./babel.config');
var isomorphic = require('./isomorphic').plugin;
var $q = require('webpack-querify');

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    polyfills: './src/commons/polyfills.js',
    app: [
      'webpack-hot-middleware/client',
      './src/commons/commons.js',
      './src/client/client.js'
    ]
  },
  output: {
    path: path.join(__dirname, '..', 'static', 'dist'),
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [$q({'babel': babelConfig})]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(css|scss)/,
        exclude: path.join(__dirname, '..', 'src', 'universal', 'views'),
        loader: $q({
          style: {},
          css: {
            modules: false,
            sourceMap: true
          },
          sass: {
            sourceMap: true,
            outputStyle: 'expanded'
          },
          autoprefixer: {
            browsers: 'last 2 versions,ie <= 8'
          }
        })
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, '..', 'src', 'universal', 'views'),
        loader: $q({
          style: {},
          css: {
            modules: true,
            sourceMap: true,
            importLoaders: 2,
            localIdentName: '[local]___[hash:base64:5]'
          },
          sass: {
            sourceMap: true,
            outputStyle: 'expanded'
          },
          autoprefixer: {
            browsers: 'last 2 versions,ie <= 8'
          }
        })
      },
      {
        test: isomorphic.regular_expression('images'),
        loader: 'url-loader',
        query: {
          limit: 10240
        }
      }
    ],
    postLoaders: [{
      test: /\.js$/,
      loaders: ['es3ify']
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        CLIENT: true
      }
    }),
    isomorphic.development()
  ]
};
