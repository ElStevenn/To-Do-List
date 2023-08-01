const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      port: 8001
   },
   module: {
      rules: [
         {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           use: 'babel-loader',
         },
         {
           test: /\.css$/,
           use: ['style-loader', 'css-loader'],
         },
         // Add the image loader rule here
         {
           test: /\.(png|jpe?g|gif)$/i,
           use: [
             {
               loader: 'file-loader',
               options: {
                 name: 'images/[name].[hash].[ext]',
               },
             },
           ],
         },
       ],
  },
  
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}
