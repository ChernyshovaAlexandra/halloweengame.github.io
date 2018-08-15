const Path = require( 'path' );
const Autoprefixer = require( 'autoprefixer' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const Webpack = require( 'webpack' );

const plugins = [
  new HtmlWebpackPlugin({
    // где будет index
    filename: '../index.html',
    // откуда плагин будет брать шаблона индекса
    template: 'index.template.html',
    // куда вставлять скрипты
    inject: 'body'
  })
];

const prod = process.argv[ 4 ] === '--production'; // параметр из командной строки

if( prod )
{
  // минифицируем js
  plugins.push( new Webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
}

// объявляем переменные, которые будут доступны при обработке бандла, но не глобально в объекте window
plugins.push( new Webpack.DefinePlugin({
  __PRODUCTION__: prod,
  __DEV__: !prod
}));

const config = {
  // входная точка для webpack
  entry: {
    // подключаем последовательно babel и главный файл нашего приложения
    app: [ 'babel-polyfill', './client/js/app' ]
  },
  output: {
    // куда сохранять бандл
    path: './build',
    // имя сохраняемого файла с шаблонизацией имени в скобках
    filename: '[name]-[hash]-bundle.js',
    // откуда будет загружать бандл webpack-server
    // publicPath: '/build/'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      // файлы должны оканчиваться на .js
      test: /\.js$/,
      // этот loader будет запускаться только в директории client/js, чтобы минимизировать кол-во запусков loader
      include: [
        Path.resolve( process.cwd(), 'client/js' )
      ],
      // подключем обработчик для es6
      loader: 'babel',
      // параметры для обработчика
      query: {
        presets: [ 'es2015' ]
      }
      },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
      {
        test: /\.(png|jpg)$/,
        include: [
          Path.resolve( process.cwd(), 'client/style' )
        ],
        loader: 'file',
        query: {
          name: '[hash].[ext]'
        }
      }]
  },
  resolve: {
    // для require, какие файлы webpack будет юзать
    extension: [ '', '.js' ],
    // где расположены наши модули; можно bower подключить
    modulesDirectories: [ 'node_modules' ]
  },

  devServer: {
    historyApiFallback: true,
    contentBase       : './'
  },
  plugins: plugins
};

module.exports = config;
// module.exports = {
//     entry: './app.js',
//     output: {
//         filename: './bundle.js',
//         library: 'myApp'
//     }
// };