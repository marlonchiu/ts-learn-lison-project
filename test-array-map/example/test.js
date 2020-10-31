"use strict";
exports.__esModule = true;
var arrayMap = require("../dist/test-array-map");
var result = arrayMap([1, 2], function (item) {
    return item + 2;
}).forEach(function (item) {
    // console.log(item.length) // 报错提示 number是没有 length 属性的
    item.toFixed();
});
console.log(result);
