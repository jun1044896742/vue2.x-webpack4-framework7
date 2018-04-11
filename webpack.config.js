const env = require("yargs-parser")(process.argv.slice(2)).mode||'development';
const merge = require("webpack-merge");
const webpackConfig = require(`./config/webpack.${env}.js`);
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path")
let bacseConfig = {
    mode:"development",
    entry:{
        main:"./src/main.js"
    },
    output:{
        filename:"assets/scripts/[name].js",
        path:path.join(__dirname,"./dist"),
        publicPath:"/"
    },
    module:{
        rules:[  {
            test: /\.vue$/,
            loader: 'vue-loader',
            // options: {
            //   loaders: {
            //     js: [
            //       { loader: 'cache-loader' },
            //       { loader: 'babel-loader', options: { presets: ['env'] } }
            //     ]
            //   }
            // }
          },{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: [["env", { "modules": false }]]
            }
          },{
            test: /\.(png|jpg|gif|eot|woff|woff2|ttf|svg|otf)$/,
            use: [{
              loader: 'file-loader',
              options: {
                name: env == "production" ? "assets/images/[name].[hash:5].[ext]" : "assets/images/[name].[ext]"
              }
            }]
          },
          {
                test:/\.css$/,
                // exclude: /node_modules/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader",
                        options:{
                            importLoaders:1,
                            minimize:env==="production"
                        }
                    }]
                })
            }]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: 'all',
                    name: 'common',
                    minChunks: 2
                },
            }
        },
        runtimeChunk: { name: 'runtime' }
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:__dirname +"/src/index.html",
            favicon:__dirname +"/src/assets/Favicon.ico"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,
        noInfo: true
      },
    resolve: {
        extensions: ['.js', '.vue'],
        // alias: {
        //     'vue$': 'vue/dist/vue.esm.js'
        //     }
    }

}
module.exports = merge(bacseConfig,webpackConfig)