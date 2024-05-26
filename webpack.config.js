const path = require('path');

module.exports = {
  mode: 'production', // Cambia a 'development' si estás en modo de desarrollo
  entry: './src/index.js', // Asegúrate de que este archivo existe y es el punto de entrada de tu aplicación
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
