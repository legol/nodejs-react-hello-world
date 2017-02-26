//var config = {
//   entry: './main.js',
//	
//   output: {
//      path:'/home/ubuntu/git_root/nodejs-react-hello-world/',
//      filename: 'index.js',
//   },
//	
//   devServer: {
//      inline: true,
//      port: 8080
//   },
//	
//   module: {
//      loaders: [
//         {
//            test: /\.jsx?$/,
//            exclude: /node_modules/,
//            loader: 'babel-loader',
//				
//            query: {
//               presets: ['es2015', 'react']
//            }
//         }
//      ]
//   }
//}
//
//module.exports = config;


var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: __dirname + '/main.js',
  output: {
    path: __dirname + "/output/",
    filename: "scripts.min.js"
  },
   devServer: {
      inline: true,
      port: 10011 
   },
   plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  module: {
     loaders: [
        {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           loader: 'babel-loader',
   			
           query: {
              presets: ['es2015', 'react']
           },
        },
     ],
  },
};
