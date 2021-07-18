# defaultText
方便的给对象，字符串或者数字一个默认值


## use
```
npm i defaultText -S
```

```js
const firstProxy2Default = new Proxy2Default('暂无'});
firstProxy2Default.proxyObj(undefined);  //'暂无'
```

有时候你可能需要一些比较特殊的处理规则，比如你哪些特殊的值需要处理成为默认值通过includes，哪些特殊的值0， false不需要处理为默认值通过excludes

```js
const firstProxy2Default = new Proxy2Default('暂无', { includes: ['0'] });
firstProxy2Default.proxyObj({msg: '', id: 5, value: '0'}, 'msg'); // '暂无'
firstProxy2Default.proxyObj({msg: '', id: 5, value: '0'}, 'value'); // '暂无'
```
Proxy2Default参数说明
|参数|说明|类型|默认值
|第一个参数|第一个参数为字符串或者函数，如果是函数的返回值为默认值|string\|() => string|无
|options|这里是一个可选对象|object|无

options的参数说明
|参数|说明|类型|默认值
|includes|里面的值会被替换为默认值|string\|number[]|无
|excludes|这里的值不会被替换为默认值，常见0等你不想被替换为默认值的情况|string\|number[]|无

proxyObj中参数说明
```js
proxyObj(
  obj: any, 
  key?: string, 
  options?: { 
    defaultText?: string|(() => string), 
    includes?: (string|number)[],
    excludes?: (string|number)[],
  }
)
```
proxyObj中的参数优先级高 会覆盖类中的参数！








