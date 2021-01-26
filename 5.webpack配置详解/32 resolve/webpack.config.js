const resolve=require('path').resolve
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/js/index.js',
    output: {
        //文件名称（指定名称+目录）
        filename: 'js/[name].js',
        //输出文件目录（将来所有资源输出的公共目录）
        path: __dirname + '/build',
        //所有输出资源的公共路径前缀-->路径的前面 'imgs/a.jpg' --> '/imgs/a.jpg' 前面是当前目录下，后面是根目录
        publicPath: '/',
        chunkFilename: 'js/[name]_chunk.js',//非入口chunk的名称 1、通过import引入的 2、node_modules的
        library: '[name]',//整个库向外暴露的变量名
        // libraryTarget:'window'//变量名添加到哪个上 browser
        // libraryTarget:'global' //变量名添加到哪个上 node
        libraryTarget: 'commonjs' //变量名添加到哪个上 commonjs
    },
    module: {
        rules: [
            //loader的配置
            {
                test: /\.css$/,
                //多个loader用use
                use: ['style-loader', 'css-loader']
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'development',
    //解析模块的规则
    resolve: {
        //配置解析模块路径别名:简写路径，缺点：路径没有提示
        alias:{
            $css:__dirname+'/src/css'
        },
        //配置省略文件路径的后缀名
        extensions:['js','json','jsx','css'],
        //告诉webpack解析模块时候应该去找哪个目录
        modules:[resolve(__dirname,'../../.../node_modules'),'node_modules']
    }
}