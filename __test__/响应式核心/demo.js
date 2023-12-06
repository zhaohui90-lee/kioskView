const author = {
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery',
    {
      'name': '小王子',
      'price': 20
    }
  ],
  address: "1111111"
}

const handerGetter = () => {
  // return function get(target, key) {
  //   return Reflect.get(target, key)
  // }
  return {
    get(target, key) {
      return Reflect.get(target, key)
    }
  }
}

const handerSetter = () => {
	return {
    set(target, key, newVal) {
      Reflect.set(target, key, newVal)
    }
  }
}

const baseHandlers = Object.assign({}, {
  get: handerGetter,
  set: handerSetter
})

const createReactive = function(target) {
  return new Proxy(target, baseHandlers) 
}


const copy = createReactive(author)
console.log(copy);
console.log(copy === author);

console.log(author.name);