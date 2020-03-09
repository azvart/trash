const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s(a|s)ss$/,
        loader:[
          isDevelopment ? 'style-loader': MiniCssExtractPlugin.loader,
          {
            loader:'css-loader',
            options:{
              modules:true,
              sourceMap:isDevelopment
            }
          },
          {
            loader:'sass-loader',
            options:{
              sourceMap:isDevelopment
            }
          }
        ]
      },
      {
        test:/\.s(a|c)ss$/,
        exclude:/\.module.(s(a|c)ss)$/,
        loader:[
          isDevelopment ? 'style-loader':MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader:'sass-loader',
            options:{
              sourceMap:isDevelopment
            }
          }
        ]
      }
    ]
  },
 
  plugins: [
    
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ]
};