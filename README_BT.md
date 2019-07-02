#
 for branches and tags.

## t0.1.*

### t0.1.1
    1.网络请求基础
        ApiClient 类
            目前主要 ajax 方法
        导入依赖 axios 和 lodash
    2.Presenter base
        basePresenter
        appPresenter

## b0.1.*
    react-navigation部分

### b0.1.1 react-navigation 添加

    b0.1.2
        1.项目/app/container 配置
        2.navigation lifecycle
        3.传递参数给路由
        4.配置标题栏
        5.标题栏按钮

    b0.1.3 
        TODO 1.App containers
        2.打开全屏模式

    b0.1.4 
        Tab navigation
            1.添加 tab assets 图片
        样式 文件创立

    b0.1.5 drawer navigation
    b0.1.6 身份验证流程
        添加 router/authCheckDemo
        添加 auth/
        
        warn bug: "Warning: Async Storage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/async-storage' instead of 'react-native'."
        导入 @react-native-community/async-storage
        参考：https://www.npmjs.com/package/@react-native-community/async-storage

    b0.1.7 safe view
        1.iOS 适配及icon
        2. 添加 style distances
        3. 引入 react-native-device-info
        4. 配置项目导航栏 和 tabBar选项卡