const path = require("path"); //esto  es de node
const HtmlWebpackPlugin = require("html-webpack-plugin");
//creamos un modulo donde viene cada configuracion de lo que va  a suceder
module.exports = {
  //entrada
  entry: "./src/index.js",
  //salida
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  //extensiones
  resolve: {
    extensions: [".js"],
  },
  //reglas de babel
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  //establecer plugin
  plugins: [
    new HtmlWebpackPlugin({
      //aqui se pasaba un objeto y no un array con objeto adentro
      inject: true,
      template: "./public/index.html",
      filename: "./index.html", //aqui se arregla la ruta
    }),
  ],
};
