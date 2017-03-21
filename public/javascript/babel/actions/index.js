"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initUser = exports.deleteUser = exports.addUser = exports.selectUser = undefined;

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _store = require("../../babel/store.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectUser = exports.selectUser = function selectUser(user) {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    };
};

var addUser = exports.addUser = function addUser() {
    console.log("Add user: ");
    return {
        type: 'USER_ADD',
        payload: { index1: 'a', index2: 'b', age: 18 }
    };
};

var deleteUser = exports.deleteUser = function deleteUser(user) {
    console.log("Delete user! ");
    return {
        type: 'USER_DELETE',
        payload: user
    };
};

var initUser = exports.initUser = function initUser() {
    console.log("Init user: ");
    return {
        type: 'USER_INIT',
        state: 'isFetchingdata',
        payload: _jquery2.default.ajax({
            method: "POST",
            data: "data",
            url: "/react/users",
            dataType: "json"
        }).then(function (data) {
            console.log(data);
            var action = {
                type: 'GET_INIT_DATA',
                state: 'finishFetchingdata',
                payload: data
            };
            _store.store.dispatch(action);
            return data;
        })
    };
};