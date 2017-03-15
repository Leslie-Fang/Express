'use strict';

var a = require("../babel/reacttest1.js");
console.log(a);
console.log('dasd');
ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'example2!'
    )
), document.getElementById('example2'));