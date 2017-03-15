var webpack = require('webpack');

module.exports = {
    entry: {
        reacttest2:'./public/javascript/babel/reacttest2.js'
    },
    output: {
        path : './public/javascript/webpack/',
        filename: '[name].js'
    }
}