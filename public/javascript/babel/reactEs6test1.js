"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require("react-redux");

var _reactEs6test = require("../babel/component/reactEs6test2.js");

var _store = require("../babel/store.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = function (_React$Component) {
    _inherits(Board, _React$Component);

    function Board(props) {
        _classCallCheck(this, Board);

        return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));
    }

    _createClass(Board, [{
        key: "render",
        value: function render() {
            return React.createElement(
                _reactRedux.Provider,
                { store: _store.store },
                React.createElement(
                    "div",
                    null,
                    React.createElement(_reactEs6test.Myheader, null),
                    React.createElement(_reactEs6test.HelloMessage2, { name: "leslie" }),
                    React.createElement(_reactEs6test.Test, null),
                    React.createElement(_reactEs6test.Componet2, null),
                    React.createElement(_reactEs6test.Todolist, null),
                    React.createElement(_reactEs6test.App, null)
                )
            );
        }
    }]);

    return Board;
}(React.Component);

ReactDOM.render(React.createElement(Board, null), document.getElementById('example'));