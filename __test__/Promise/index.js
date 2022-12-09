// 嵌套调用
// const promise = createAudioFileAsync(audioSettings);
// promise.then(successCallback, failureCallback);

// 链式调用
// doSomething()
// .then(result => doSomethingElse(result))
// .then(newResult => doThirdThing(newResult))
// .then(finalResult => {
//   console.log(`Got the final result: ${finalResult}`);
// })
// .catch(failureCallback);

new Promise((resolve, reject) => {
  console.log('初始化');

  resolve();
})
.then(() => {
  console.log('执行「这个」”');

  throw new Error('有哪里不对了');

})
.catch(() => {
  console.log('执行「那个」');
})
.then(() => {
  console.log('执行「这个」，无论前面发生了什么');
});
