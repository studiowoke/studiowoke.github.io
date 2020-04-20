const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin')


const isCBsHome = process.env.HOME =="/home/jb"
const haveDevFlag = process.env.npm_lifecycle_script.includes("development")
const isDevEnv = (isCBsHome && haveDevFlag)

console.log("is cb's home ?: ", isCBsHome);
console.log("have dev flag: ", haveDevFlag);
//console.log("NDE_ENV: ", process);


module.exports = {
    mode: isCBsHome ? "development" : 'production',
    entry: {
        app: ['./src/index.js'],
        //print: ['./frontend/src/print.js', hotMiddlewareScript],
      },
    output: {
        //publicPath: '/',
        path: path.resolve(__dirname, '../public'),
        filename: '[name].js',
    },
    optimization: isDevEnv ? undefined : {
        splitChunks: {
          minSize: 30000,
          automaticNameDelimiter: '~',
          cacheGroups: {
            defaultVendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
                },
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
                }
            }
        }
    },
    module: {
        rules: [
        { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader" ,
            options: {
                presets: ['@babel/preset-env'],
                plugins: []
            }
        },

        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader'],
        },
        {   
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader'],
        },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./index-clone.html"
        }),
    ],
  };
  



