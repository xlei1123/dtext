# defaultText
方便的给对象，字符串或者数字一个默认值


## use
```
npm i defaultText -S
```

```
// const firstProxy2Default = new Proxy2Default('暂无'})
```

有时候你可能需要一些比较特殊的处理规则，比如你哪些特殊的值需要处理成为默认值通过includes，哪些特殊的值0， false不需要处理为默认值通过excludes

```js
const firstProxy2Default = new Proxy2Default('暂无', { includes: ['0'] })
```

另外你还可以通过正则的方式来替换为默认值






