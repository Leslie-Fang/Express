require("!style-loader!css-loader!../../css/webpacktest.css");
var a ={
    f1: document.write('It works.'),
    f2: document.write(require('./webpacktest2.js')) // 添加模块
 };
require('./boudle.js');
module.exports =a;
