"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
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