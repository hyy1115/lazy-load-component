# lazyLoadComponent

### 安装
```node
npm i --save lazyLoadComponent
```

### 用法
如果你的react项目使用了webpack，那么可以使用lazyLoadComponent实现代码切割。
```javascript
const Login = lazyLoadComponent(() => import('./containers/Login'))
```

### 语法
lazyLoadComponent支持传入一个Promise属性的函数。
```javascript
lazyLoadComponent(fn)
```

### 注意事项
你的react组件必须包含default导出模块。