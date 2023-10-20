// 测试文件

const Proxy2Default = require('../lib/index.common').default;
const { proxyObj } = require('../lib/index.common');


// undefined 展示暂无
const firstProxy2Default = new Proxy2Default('暂无');
const proxyObj2 = firstProxy2Default.proxyObj;
test('undefined show 暂无', () => {
  expect(firstProxy2Default.proxyObj(undefined)).toBe('暂无');
});

test('undefined show 暂无', () => {
  expect(proxyObj2(undefined)).toBe('暂无');
});


// undefined 字符串0 等包含在includes中的展示暂无
const secondProxy2Default = new Proxy2Default('暂无', { includes: [ "0" ]});
test('undefined show 暂无', () => {
  expect(secondProxy2Default.proxyObj(undefined)).toBe('暂无');
});

test('0字符串 show 暂无', () => {
  expect(secondProxy2Default.proxyObj("0")).toBe('暂无');
});


// 排除展示暂无的 例如有时0需要展示出来
const thrProxy2Default = new Proxy2Default('暂无', { excludes: [ 0 ]});
test('0 show 0', () => {
  expect(thrProxy2Default.proxyObj(0)).toBe(0);
});


// ==================================
// proxyObj的用法
// undefined 展示暂无
test('undefined show 暂无', () => {
  expect(proxyObj(undefined)).toBe('暂无');
});


// undefined 字符串0 等包含在includes中的展示暂无
test('undefined show 暂无', () => {
  expect(proxyObj(undefined)).toBe('暂无');
});

test('0字符串 show 暂无', () => {
  expect(proxyObj("0", {includes: ["0"]})).toBe('暂无');
});


// 排除展示暂无的 例如有时0需要展示出来
test('0 show 0', () => {
  expect(proxyObj(0, {excludes: [0]})).toBe(0);
});


