/**
 * 保护代理，就是在访问层面做文章，在getter和setter函数里去进行校验和拦截，，确保一部分变量
 * 是安全的。目前实现保护代理时，考虑的首要方案就是ES6中的Proxy
 */

// 明星
let star = {
  name: '张三',
  age: 25,
  phone: '13919193190' // 明星的phone不对外暴露
}

// 经纪人
let agent = new Proxy(star, {
  get: function(target, key) {
    if(key === 'phone') {
      // 返回经纪人自己的手机号
      return '18612311231'
    }
    if(key === 'price') {
      // 明星不保价 经纪人报价
      return 120000
    }
    return target[key]
  },
  set: function(target, key, val) {
    if(key === 'customPrice') {
      if(val < 100000) {
        throw new Error('价格太低')
      } else {
        target[key] = val
        return true
      }
    }
  }
})

// 测试
console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);

agent.customPrice = 150000
console.log('agent.customPrice', agent.customPrice);