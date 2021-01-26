const path = require("path");
const HtmlWebpackPlugins = require("html-webpack-plugin");
module.exports = {
    mode: "development", // 环境模式
    entry: path.resolve(__dirname, "./src/main.js"), // 打包入口
    output: {
        path: path.resolve(__dirname, "dist"), // 打包出口
        filename: "js/[name].js", // 打包完的静态资源文件名
    },
    plugins: [
        new HtmlWebpackPlugins({
            template: path.resolve(__dirname, "./index.html"), // 需要使用的 html 模板
            filename: "index.html", // 打包后输出的文件名
            title: "手动webpack搭建的vue开发环境", // index.html 模板内，通过 <%= htmlWebpackPlugin.options.title %> 拿到的变量
        })
    ]

}