// is 关键字 在判断返回值类型的同时 还会将判断类型为true的情况时 将返回值类型转化为此类型
function isString(s: unknown): s is string {
  return typeof s === 'string'
}

function upperCase(str: unknown) {
  // str.toUpperCase()
}

function ifUpperCase(str: unknown) {
  if(isString(str)) {
    str.toUpperCase()
  }
}

/**
 * 
 * @param d 日期
 * @param f 想要格式化的字符串
 */
function dateFormatter(d: Date | string, f?: string) {
  const date = new Date(d)
  if(f) {
    return `${date.getFullYear()}${f}${date.getMonth() + 1}${f}${date.getDate()}`
  } else {
    return new Date(d)
  }
}

function dealDate(d: string) {
  return new Date(d).getTime()
}

const date = dealDate(dateFormatter('2020-10-10', ':') as string)
const data1 = dealDate(<string>dateFormatter('2020-11-11', '|'))

