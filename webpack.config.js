var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.join(__dirname, 'app'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          { loader: 'babel-loader' },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]'
            },
          },
          { loader: 'sass-loader' },
        ]
      }
    ]
  },

  devServer: {
    publicPath: '/',
    stats: {
      modules: false,
    }
  }
};
