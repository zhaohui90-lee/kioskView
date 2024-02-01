// 引入 compile 函数
import { compile } from 'vue';

// 模板字符串
const template = '<div>{{ msg }}</div>';

// 调用 compile 函数进行模板编译
const { code } = compile(template);

// 输出编译后的渲染函数代码
console.log(code);