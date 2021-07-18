/**
 * 取默认值 多级key
 */

export default class Proxy2Default {
  public defaultText = '暂无';
  public includes;
  public excludes;
  constructor(
    defaultText: string | (() => string),
    options?: { includes?: (string|number)[], excludes?: (string|number)[]},
  ) {
    if (typeof defaultText === 'string') {
      this.defaultText = defaultText;
    } else {
      this.defaultText = defaultText();
    }
    this.includes = options?.includes;
    this.excludes = options?.excludes;
  }
  proxyObj(
    obj: any, 
    key?: string, 
    options?: { 
      defaultText?: string|(() => string), 
      includes?: (string|number)[],
      excludes?: (string|number)[],
    }
  ){
    let _defaultText = '';
    const _includes = options?.includes || this.includes;
    const _excludes = options?.excludes || this.excludes;
    if (typeof options?.defaultText === 'function') {
      _defaultText = options.defaultText();
    } else {
      _defaultText = options?.defaultText || this.defaultText;
    }
    /**
     * 如果不是对象
     */
    if (typeof obj !== 'object') {
      if (_excludes?.includes(obj)) {
        return obj;
      }
      if (_includes?.includes(obj)) {
        return _defaultText;
      }
      if (!obj) return _defaultText;
      return obj;
    } else {
      // 对象取key
      // key 不存在直接给obj返回
      if (!key) return {...obj};
      const _proxyObj = new Proxy({...obj}, {
        get: (obj, prop) => {
          if (_excludes?.includes(obj[prop])) return obj[prop];
          if (_includes?.includes(obj[prop])) return _defaultText;
          if (!obj[prop]) return _defaultText;
          return obj[prop];
        }
      });
      return _proxyObj[key];
    }
  }
}
export const proxyObj = new Proxy2Default('').proxyObj;



// example

// const firstProxy2Default = new Proxy2Deault('暂无', { includes: ['0'] })
// export default firstProxy2Default;
