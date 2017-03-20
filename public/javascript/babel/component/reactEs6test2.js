"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.App = exports.Test = exports.HelloMessage2 = exports.Todolist = exports.Myheader = exports.Componet2 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _container = require("../../babel/containers/container1.js");

var _container2 = _interopRequireDefault(_container);

var _container3 = require("../../babel/containers/container2.js");

var _container4 = _interopRequireDefault(_container3);

var _container5 = require("../../babel/containers/container3.js");

var _container6 = _interopRequireDefault(_container5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Componet2 = exports.Componet2 = function (_React$Component) {
    _inherits(Componet2, _React$Component);

    function Componet2(props) {
        _classCallCheck(this, Componet2);

        return _possibleConstructorReturn(this, (Componet2.__proto__ || Object.getPrototypeOf(Componet2)).call(this, props));
    }

    _createClass(Componet2, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "component2"
                )
            );
        }
    }]);

    return Componet2;
}(React.Component);

;

var Myheader = exports.Myheader = function (_React$Component2) {
    _inherits(Myheader, _React$Component2);

    function Myheader(props) {
        _classCallCheck(this, Myheader);

        return _possibleConstructorReturn(this, (Myheader.__proto__ || Object.getPrototypeOf(Myheader)).call(this, props));
    }

    _createClass(Myheader, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "Header"
                )
            );
        }
    }]);

    return Myheader;
}(React.Component);

;

var Todolist = exports.Todolist = function (_React$Component3) {
    _inherits(Todolist, _React$Component3);

    function Todolist(props) {
        _classCallCheck(this, Todolist);

        var _this3 = _possibleConstructorReturn(this, (Todolist.__proto__ || Object.getPrototypeOf(Todolist)).call(this, props));

        _this3.state = {
            todo: [{ id: 1, test: 'apple', complete: false }, { id: 2, test: 'banana', complete: false }]
        };
        return _this3;
    }

    _createClass(Todolist, [{
        key: "eachtodo",
        value: function eachtodo(text, i) {
            return React.createElement(
                "div",
                { key: i },
                text.test
            );
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "Todolist2"
                ),
                this.state.todo.map(function (text, i) {
                    return React.createElement(
                        "div",
                        { key: i },
                        text.test
                    );
                })
            );
        }
    }]);

    return Todolist;
}(React.Component);

;

//ReactDOM.render(<componet2/>, document.getElementById('example2'));


var HelloMessage2 = exports.HelloMessage2 = function (_React$Component4) {
    _inherits(HelloMessage2, _React$Component4);

    function HelloMessage2(props) {
        _classCallCheck(this, HelloMessage2);

        return _possibleConstructorReturn(this, (HelloMessage2.__proto__ || Object.getPrototypeOf(HelloMessage2)).call(this, props));
    }

    _createClass(HelloMessage2, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    null,
                    "Hello world ",
                    this.props.name
                )
            );
        }
    }]);

    return HelloMessage2;
}(React.Component);

var Test = exports.Test = function (_React$Component5) {
    _inherits(Test, _React$Component5);

    function Test(props) {
        _classCallCheck(this, Test);

        var _this5 = _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));

        _this5.state = {
            editing: false,
            text: 'Test state'
        };
        _this5.handleClick = _this5.handleClick.bind(_this5);
        return _this5;
    }

    _createClass(Test, [{
        key: "handleClick",
        value: function handleClick() {
            console.log('Success!'); // null
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "come on!"
                ),
                React.createElement(
                    "p",
                    { onClick: this.handleClick },
                    this.state.text
                )
            );
        }
    }]);

    return Test;
}(React.Component);

var App = exports.App = function (_React$Component6) {
    _inherits(App, _React$Component6);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    null,
                    "User List"
                ),
                React.createElement(_container2.default, null),
                React.createElement("hr", null),
                React.createElement(
                    "h2",
                    null,
                    "User Details"
                ),
                React.createElement(_container4.default, null),
                React.createElement("hr", null),
                React.createElement(
                    "h2",
                    null,
                    "User Add"
                ),
                React.createElement(_container6.default, null)
            );
        }
    }]);

    return App;
}(React.Component);