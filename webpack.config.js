const { NODE_ENV } = process.env;

module.exports = {
  mode: NODE_ENV || 'development',
  entry: [
    './src/index.jsx',
  ],
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }, {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
