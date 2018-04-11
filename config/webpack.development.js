const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    output: {
        filename: "assets/scripts/[name]_[hash:5].js"
    },
    plugins:[
        new ExtractTextPlugin({
            filename: "assets/styles/style.css",
            allChunks: true
          }),
    ]
}