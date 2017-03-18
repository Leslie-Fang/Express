var webpack = require('webpack');

module.exports = {
    entry: {
        reacttest2:'./public/javascript/babel/reacttest2.js',
        reactEs6test1:'./public/javascript/babel/reactEs6test1.js'
    },
    output: {
        path : './public/javascript/webpack/',
        filename: '[name].js'
    }
}