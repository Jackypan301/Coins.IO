
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'public'); // where we will place our bundled file
const APP_DIR = path.resolve(__dirname, 'client'); // where the components we are bundling live
module.exports = {
  mode: 'development', // process.env.NODE_ENV === 'production' ? 'production' : 'development'
  entry: APP_DIR + '/index.jsx', // need to reference the point where we call reactdom.render
  output: {
    path: BUILD_DIR, // where we want to put bundle.js usually wherever index.html is
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  externals: {
    moment: 'moment'
  },
  watch: true, // boolean
};