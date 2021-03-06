const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { default: merge } = require("webpack-merge")
const superConfig = require('./webpack.config');

module.exports=merge(superConfig,{
    devServer:{
        port: 3005;
    },
    devtool: false,
    mode:'development',
    plugins:[new MiniCssExtractPlugin({
        filename: 'main.css'
    })]
})  