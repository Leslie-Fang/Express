'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'USER_SELECTED':
            return Object.assign({}, action.payload);
        case 'USER_CONFIRM':
            return action.payload;
        default:
            break;
    }
    return state;
};