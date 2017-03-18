"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactEs6test = require("../babel/reactEs6test2.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log(_reactEs6test.a);
console.log(_reactEs6test.Componet2);

var HelloMessage2 = function (_React$Component) {
    _inherits(HelloMessage2, _React$Component);

    function HelloMessage2() {
        _classCallCheck(this, HelloMessage2);

        return _possibleConstructorReturn(this, (HelloMessage2.__proto__ || Object.getPrototypeOf(HelloMessage2)).apply(this, arguments));
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

console.log(HelloMessage2);

var Test = function (_React$Component2) {
    _inherits(Test, _React$Component2);

    function Test() {
        _classCallCheck(this, Test);

        return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments));
    }

    _createClass(Test, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "come on!"
                )
            );
        }
    }]);

    return Test;
}(React.Component);

var Board = function (_React$Component3) {
    _inherits(Board, _React$Component3);

    function Board() {
        _classCallCheck(this, Board);

        return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
    }

    _createClass(Board, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(HelloMessage2, { name: "leslie" }),
                React.createElement(Test, null),
                React.createElement(_reactEs6test.Componet2, null)
            );
        }
    }]);

    return Board;
}(React.Component);

ReactDOM.render(React.createElement(Board, null), document.getElementById('example'));