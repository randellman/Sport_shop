const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin = require("imagemin-webpack");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
const imageminSvgo = require("imagemin-svgo");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },

      {
        test: /\.(sass|scss)$/,
        use: [      
          {
            loader: MiniCssExtractPlugin.loader,           
          },
          
          {
            loader: "css-loader",
              options:{
                sourceMap: true
              }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "resolve-url-loader"
          }, 
          {
            loader: "sass-loader",
              options:{
                sourceMap: true
            }
          }
        ]
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          emitFile: true, 
          outputPath: "img/"
        },
      },          

    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      outputPath: "./dist",
      filename: "main.css", 
    }),
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery",
    }), 
    new ImageminPlugin({
      bail: false, // Ignore errors on corrupted images
      cache: true,
      include: /img/,
      exclude: /node_modules/,
      imageminOptions: {
        // Lossless optimization with custom option
        plugins: [
          imageminGifsicle({
            interlaced: true
          }),
          imageminJpegtran({
            progressive: true
          }),
          imageminOptipng({
            optimizationLevel: 5
          }),
          imageminSvgo({
            removeViewBox: true
          })
        ]
      }
    })          
  ]
};



















