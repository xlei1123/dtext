export default class Proxy2Default {
  constructor(
    defaultText: string | (() => string),
    options?: { includes?: (string|number)[], excludes?: (string|number)[]},
  );
  proxyObj(
    obj: any,
    options?: { 
      key?: string, 
      defaultText?: string|(() => string), 
      includes?: (string|number)[],
      excludes?: (string|number)[],
    }
  ): string | Object
}