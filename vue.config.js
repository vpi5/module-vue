// vue.config.js
const path = require('path');

module.exports = {
    publicPath : "./",
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    },
    devServer:{
        port:9096, // 启动端口
        open:true  // 启动后是否自动打开网页
    }
};

function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/styles/imports.styl'),
            ],
        })
}
