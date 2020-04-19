const path = require('path');
const webpack = require('webpack');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin')


const isDevEnv = process.env.HOME =="/home/jb"
console.log("is dev env: ", isDevEnv);


module.exports = {
    mode: isDevEnv ? "development" : 'production',
    entry: {
        app: ['./frontend/src/index.js', hotMiddlewareScript],
        print: ['./frontend/src/print.js', hotMiddlewareScript],
      },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, './public'),
        filename: '[name].js',
    },
    optimization: {
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
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        }),
        new VueLoaderPlugin()
    ],
  };
  



