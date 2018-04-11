const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    output: {
        filename: "assets/scripts/[name]_[hash:5].js"
    },
    plugins:[
        new ExtractTextPlugin({
            filename: "assets/styles/style_[hash:5].css",
            allChunks: true
          }),
    ]
}