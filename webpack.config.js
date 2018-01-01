// 用于拼接路径
var path = require('path');
var webpack = require('webpack');

module.exports = {
    // 指定项目入口
    entry: path.resolve(__dirname, 'public/index.jsx'),

    devtool: "source-map",

    // 对输出结果描述
    output: {
        // 输出路径
        path: path.resolve(__dirname, 'public'),
        // 输出的文件名
        filename: 'bundle.js'
    },

    // 配置模块使用的加载器
    module: {
        loaders: [
            {
                test:/\.scss$/,
                exclude: /node_modules/,
                loaders:['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader/webpack', 'babel-loader']
            }
        ]
    },

    // 添加devServer字段,其中字段变动比较大，配置时需要根据文档进行配置
    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        contentBase: path.resolve(__dirname, 'public'),
        port:'8080'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]

}