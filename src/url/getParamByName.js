/**
 * 获取url参数
 * ### Example (es imports)
 * ```js
 * // url www.baidu.com?c=aa
 * import {getParamByName} from 'zrutil'
 * getParamByName('c') => 'aa'
 * ```
 */
export function getParamByName(name, url) {
  if (!url) url = window.location.href
  name = name.replace(/[\[\]]/g, '\\$&')
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
