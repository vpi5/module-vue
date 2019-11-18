# 项目安装步骤

# 安装@vue/cli

    npm install -g @vue/cli-service-global

# 使用脚手架初始化 项目

    vue create <项目的名字>
    选择 default 项 Enter 确定

# 添加 路由 控件 <vue-router>

    npm install vue-router
    新建文件：src/router.js
    在 main.js 中引用  import router from './router';
    匹配 pages 文件夹目录下 所有文件后缀为.vue的文件（包括文件夹） 并 导出
    router.js文件中添加自动化识别路由 <需引入 pages 导出文件> 并 导出路由文件
    main.js添加路由文件 <需引入 router.js 文件>
    new Vue({
      render: h => h(App),
      router,
    }).$mount('#app');
    常规路由请参考博客：https://blog.csdn.net/dengzy926/article/details/86521579
    自动识别路由：依靠 webpack 内置的 require.context 模块进行文件名 导出
    识别路由相关约定，请参照项目工程目录约定。

# 安装 less 解析 <less-loader>

    npm install -D less-loader
    使用方式：
    建立后缀为.less的文件
    模板中指定 lang="less"
    使用@import "";的方式将less文件引入
    <style scoped lang="less">
      @import "less文件路径";
    </style>
    请参照使用博客：https://www.cnblogs.com/qdwds/p/11516181.html

# 安装 stylus 解析 <stylus-loader>

    npm install -D stylus-loader
    添加 stylus 全局文件 建立 src/stylus/imports.styl 文件
    在 main.js 文件中引用 全局文件 import '@/styles/imports.styl';
    在 vue.config.js 文件中添加 stylus 解析
    使用方式：
    与 less css 使用方式相同，但此文件中所写的 类 标签样式等 均为全局（请注意重命名的问题），任何文件都可以直接访问。
    请参照使用博客：https://www.cnblogs.com/stella1024/p/10240555.html

# 安装 mint-ui 插件

    npm install mint-ui -S <安装 mint-ui插件>
    npm install babel-plugin-component -D <安装 按需加载 插件>

    babel.config.js 中添加 plugin 按需加载 mint-ui
    plugins:[
        [
          "component",
          {
            "libraryName": "mint-ui",
             "style": true
          }
        ]
    ]

    参考博客：https://www.cnblogs.com/zuobaiquan01/p/10093893.html

# 安装 有赞 UI库 <vant>

    npm install vant -S


