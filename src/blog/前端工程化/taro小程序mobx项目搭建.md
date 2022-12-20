# taro小程序mobx项目搭建

## 创建基础工程

```shell
taro init my_miniprogram
```

## 完善项目结构

```shell
├── dist                   编译结果目录
├── config                 配置目录
|   ├── dev.js             开发时配置
|   ├── index.js           默认配置
|   └── prod.js            打包时配置
├── src                    源码目录
|   ├── assets             资源目录
|   ├── config             项目内置配置
|   ├── components         常规组件文件夹
|   ├── constants          常量存放文件夹
|   ├── enums              枚举
|   ├── interceptors       拦截器
|   ├── interfaces         接口定义
|   ├── pages              页面
|   ├── services           服务类文件夹
|   ├── store              mobx数据管理
|   ├── styles             项目通用样式文件
|   ├── utils              工具类存放文件夹 
|   └── app.tsx            项目入口文件
└── .editorconfig          编码规范
└── .eslintrc              eslintrc配置文件
└── .gitignore             git忽略文件
└── global.d.ts            全局模版声明
└── package.json           npm配置
└── project.config.json    小程序配置
└── README.md              项目说明文档
└── tsconfig.json          tslint配置
└── yarn-error.log         yarn日志记录
└── yarn.lock              
```

### 文件引用提示

更改 `config/index.js` ，增加 `alias` 配置， 这一步是为了在打包时能够解析出来简写的路径，否则会当成npm包去解析，没有同名的包则会自动安装npm包

```js
const path = require('path');
const config = {
	alias: {
		'~/': path.resolve(__dirname, '..', 'src/'),
		'~/assets': path.resolve(__dirname, '..', 'src/assets'),
		'~/components': path.resolve(__dirname, '..', 'src/components'),
		'~/config': path.resolve(__dirname, '..', 'src/config'),
		'~/constants': path.resolve(__dirname, '..', 'src/constants'),
		'~/enums': path.resolve(__dirname, '..', 'src/enums'),
		'~/interceptors': path.resolve(__dirname, '..', 'src/interceptors'),
		'~/interfaces': path.resolve(__dirname, '..', 'src/interfaces'),
		'~/pages': path.resolve(__dirname, '..', 'src/pages'),
		'~/services': path.resolve(__dirname, '..', 'src/services'),
		'~/styles': path.resolve(__dirname, '..', 'src/styles'),
		'~/utils': path.resolve(__dirname, '..', 'src/utils'),
	},
}
```

然后在 `tsconfig.json` 中的 `compilerOptions` 加入以下选项，这一步是为了编辑器插件能够给出路径提示
```json
{
  "compilerOptions": {
    "paths": {
      "*": ["types/*"],
      "~/": ["src/"],
      "~/*": ["src/*"],
      "~/components": ["src/components/"],
      "~/components/*": ["src/components/*"],
      "~/config": ["src/config/"],
      "~/config/*": ["src/config/*"],
      "~/constants": ["src/constants/"],
      "~/constants/*": ["src/constants/*"],
      "~/enums": ["src/enums/"],
      "~/enums/*": ["src/enums/*"],
      "~/interceptors": ["src/interceptors/"],
      "~/interceptors/*": ["src/interceptors/*"],
      "~/interfaces": ["src/interfaces/"],
      "~/interfaces/*": ["src/interfaces/*"],
      "~/services": ["src/services/"],
      "~/services/*": ["src/services/*"],
      "~/styles": ["src/styles/"],
      "~/styles/*": ["src/styles/*"],
      "~/utils": ["src/utils/"],
      "~/utils/*": ["src/utils/*"]
    },
  },
}
```

### 环境配置完善
`config` 文件夹新增 `uat` 配置
创建uat.js文件并写入以下内容
```js
// uat.js
module.exports = {
  env: {
    NODE_ENV: '"uat"'
  },
  defineConstants: {
  },
  weapp: {},
  h5: {}
}

// index.js
module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  } else if (process.env.NODE_ENV === 'uat') {   // 新增uat环境的判断
    return merge({}, config, require('./uat'))
  }
  return merge({}, config, require('./prod'))
}
```



### 小程序功能完善

#### 添加更新管理功能
更改 `app.jsx` 代码
```ts
componentWillMount() {
  // 如果是小程序环境 检查版本更新
  if ( Taro.getEnv() === 'WEAPP' ) {
    this.checkWeAppVersion()
  }
}

/**
 * 检查小程序版本更新
 */
checkWeAppVersion() {
  // 获取更新管理器对象
  const updateManager = Taro.getUpdateManager();
  // 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调
  updateManager.onUpdateReady(() => {
    Taro.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success(res) {
        if (res.confirm) {
          // 强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 onUpdateReady 回调）调用。
          updateManager.applyUpdate();
        }
      }
    });
  });
}
```

### 自定义头部组件

##### app配置修改
```jsx
// 更改 `app.tsx`
class App extends Component {
  config: Config = {
    window: {
      navigationStyle: 'custom'
    },
  }
}
```

##### 自定义头部组件
```tsx
// components/header.tsx
import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import Config from '~/config/index'
import './header.scss'

interface IProps {
  title?: string;
}

/**
 * Header - 自定义小程序头部组件
 */
class Header extends Component<IProps> {
  static options = {

  };
  state = {
    statusBarHeight: Taro.getSystemInfoSync().statusBarHeight,
    showBack: Taro.getCurrentPages().length > 1   // 只有当页面栈中页面数量大于1才显示返回和首页按钮
  };

  componentDidMount() {}

  // 返回
  backClick = () => {
    if ( Taro.getCurrentPages().length > 1 ) {
      Taro.navigateBack()
    }
  }

  // 首页
  backToIndex = () => {
    if ( Taro.getCurrentPages().length > 1 ) {
      Taro.switchTab({
        url: Config.indexRoute
      })
    }
  }

  render() {
    const { statusBarHeight, showBack } = this.state
    const { title } = this.props
    console.log('Taro.getCurrentPages()', Taro.getCurrentPages());

    return (
      <View className="fixed-header"
        style={{
          height: Taro.getSystemInfoSync().statusBarHeight + 44 + 'px',
          paddingTop: Taro.getSystemInfoSync().statusBarHeight + 'px',
        }}
      >
        <View className="inner"
          style={{
            height: 44 + statusBarHeight + 'px',    // 这两行的注释要打开 这里关闭是vuepress无法识别模版字符串的问题
            padding: statusBarHeight + 'px' + ' 20px 0`,
          }}
        >
          {
            showBack ?
            <View className="left"
              style={{
                width: 100 + 'px',
                height: 44 + 'px',
                lineHeight: 44 + 'px',
              }}
            >
              <View className="back"
                onClick={this.backClick.bind(this)}
              >
                返回
              </View>
              <View className="back-to-index"
                onClick={this.backToIndex.bind(this)}
              >
                首页
              </View>
            </View>
            :
            <View className="left"
              style={{
                width: 100 + 'px',
                height: 44 + 'px',
                lineHeight: 44 + 'px',
              }}
            ></View>
          }
          <View className="title"
            style={{
              flex: 1,
              textAlign: 'center'
            }}
          >
            {
              title || '标题'
            }
          </View>
          <View className="right" />
        </View>
      </View>
    );
  }
}

export default Header
```

##### 页面中应用头部组件
```tsx
render () {
  return (
    <View className='index'>
      <Header title="授权" />
      ...
    </View>
  )
}
```

### 模版项目地址github地址
[https://github.com/cathe-zhang/taro_mp_template](https://github.com/cathe-zhang/taro_mp_template)