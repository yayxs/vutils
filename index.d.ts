declare namespace vastUtils {
  /**
   *
   * @desc 判断是否是数组元素
   * @param {any} target
   * @return {Boolean}
   */
  export function isArr(target: any): boolean
}

declare module 'vastUtils' {
  export = vastUtils
}
