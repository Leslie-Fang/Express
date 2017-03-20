/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ({

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vistor = React.createClass({
    displayName: 'Vistor',

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Welcome hhh!'
            ),
            React.createElement(
                'h2',
                null,
                this.props.name,
                ' is ',
                this.props.age
            )
        );
    }
});

var Comment = React.createClass({
    displayName: 'Comment',

    getInitialState: function getInitialState() {
        return { editing: false, text: this.props.children };
    },
    edit: function edit() {
        //alert('edit');
        this.setState({ editing: true });
    },
    delete: function _delete() {
        // alert('delete');
        this.props.removeitem(this.props.index);
    },
    save: function save() {
        //var val =this.refs.changeText.value;
        //console.log(val);
        //alert('save');
        this.setState({ editing: false, text: this.refs.changeText.value });
    },
    normalrender: function normalrender() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                this.state.text
            ),
            React.createElement(
                'button',
                { onClick: this.edit, className: 'btn btn-primary' },
                'Edit'
            ),
            React.createElement(
                'button',
                { onClick: this.delete, className: 'btn btn-danger' },
                'Delete'
            )
        );
    },
    editrender: function editrender() {
        return React.createElement(
            'div',
            null,
            React.createElement('textarea', { ref: 'changeText', defaultValue: this.state.text }),
            React.createElement(
                'button',
                { onClick: this.save, className: 'btn btn-primary' },
                'Save'
            )
        );
    },
    render: function render() {
        if (this.state.editing) {
            return this.editrender();
        } else {
            return this.normalrender();
        }
    }
});

var Checkoutbox = React.createClass({
    displayName: 'Checkoutbox',

    getInitialState: function getInitialState() {
        return { checked: true };
    },
    changeState: function changeState() {
        this.setState({ checked: !this.state.checked });
    },
    render: function render() {
        var msg;
        if (this.state.checked) {
            msg = "checked";
        } else {
            msg = "unchecked";
        }
        return React.createElement(
            'div',
            null,
            React.createElement('input', { type: 'checkbox', onChange: this.changeState, defaultChecked: this.state.checked }),
            React.createElement(
                'p',
                null,
                'This is ',
                msg,
                '!'
            )
        );
    }

});

var Board = React.createClass({
    displayName: 'Board',


    getInitialState: function getInitialState() {
        return { comments: ['a', 'b', 'c'] };
    },
    eachComment: function eachComment(text, i) {
        return React.createElement(
            Comment,
            { key: i, index: i, removeitem: this.remove },
            text
        );
    },
    remove: function remove(i) {
        var arr = this.state.comments;
        arr.splice(i, 1);
        this.setState({ comments: arr });
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Vistor, { name: 'leslie', age: '10' }),
            React.createElement(Checkoutbox, null),
            this.state.comments.map(this.eachComment)
        );
    }
});

var Ad = React.createClass({
    displayName: 'Ad',

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h3',
                null,
                'adadad'
            )
        );
    }
});

ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Hello, world!'
    ),
    React.createElement(Board, null)
), document.getElementById('example'));

module.exports = { Vistor: Vistor, Ad: Ad };

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var rt1 = __webpack_require__(33);
var Vistor = rt1.Vistor;
var Ad = rt1.Ad;

var Board = React.createClass({
    displayName: "Board",

    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "example2!"
            ),
            React.createElement(Ad, null),
            React.createElement(Vistor, { name: "bob", age: "100" }),
            React.createElement(
                "button",
                { className: "btn btn-primary" },
                "OK"
            )
        );
    }
});

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(Board, null)
), document.getElementById('example2'));

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "example3!"
    )
), document.getElementById('example3'));

/***/ })

/******/ });