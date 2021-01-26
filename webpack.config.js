const path = require("path");
const HtmlWebpackPlugins = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
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
        }),
        // 添加新的插件，该插件用于解析.vue文件 将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // 将 JS 字符串生成为 style 节点
                    "css-loader", // 将 CSS 转化成 CommonJS 模块
                    "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass]
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 不编译node_modules下的文件
                loader: 'babel-loader'
            }
        ]
    }

}