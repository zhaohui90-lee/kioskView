/**
 * 工厂模式是创建对象的常用设计模式。为了不暴露创建对象的具体逻辑，
 * 将逻辑封装在一个函数中，这个函数就成为一个工厂。本质上是一个负责
 * 生产对象实例的工厂。工厂模式根据抽象程度的不同可以分为：简单工厂，
 * 工厂方法和抽象工厂。通常用于根据权限生成角色的场景，抽象工厂方法的
 * 实现如下：
 */

// 安全模式创建的工厂方法函数
let UseFactory = function(role) {
  if(this instanceof UseFactory) {
    let s = new this[role]();
    return s;
  } else {
    return new UseFactory(role)
  }
}

// 工厂方法函数的原型中设置所有对象的构造函数
UseFactory.prototype = {
  SuperAdmin: function() {
    this.name = '超级管理员',
    this.viewPage = ['首页', '通讯录', '发现页', '应用数据', '权限管理']
  },
  Admin: function() {
    this.name = '管理员',
    this.viewPage = ['首页', '通讯录', '发现页', '应用数据']
  },
  NormalUser: function() {
    this.name = '普通用户',
    this.viewPage = ['首页', '通讯录', '发现页']
  }
}

let superAdmin = UseFactory('SuperAdmin')
let admin = UseFactory('Admin')
let normalUser = UseFactory('NormalUser')