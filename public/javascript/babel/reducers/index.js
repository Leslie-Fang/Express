'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducer = require('./reducer1.js');

var _reducer2 = require('./reducer2');

var _reducer3 = _interopRequireDefault(_reducer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allReducers = (0, _redux.combineReducers)({
    isFetchingData: false,
    users: _reducer.reducer1,
    activeUser: _reducer3.default

});

exports.default = allReducers;