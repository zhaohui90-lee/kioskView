/**
 * 这种设计模式的思想是确保一个类只有唯一实例，
 * 一般用于全局缓存，比如全局window，唯一登录浮窗等。
 * 采用闭包的方式实现
 */
class Construct {
  constructor(name){
    this.name = name
  }

  getName() {
    console.log(this.name);
  }
}

let single = (function() {
  let instance;

  function getInstance() {
    // 如果实例存在 直接返回 否则创建实例
    if(instance === undefined) {
      instance = new Construct()
    }
    return instance
  }

  return {
    getInstance
  }
})()