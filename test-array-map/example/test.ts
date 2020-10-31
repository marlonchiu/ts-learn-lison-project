import arrayMap = require('../dist/test-array-map')

const result = arrayMap([1, 2], item => {
  return item + 2
}).forEach(item => {
  // console.log(item.length) // 报错提示 number是没有 length 属性的
  item.toFixed()
})

console.log(result)
