'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

var Container1 = function (_React$Component) {
    _inherits(Container1, _React$Component);

    function Container1(props) {
        _classCallCheck(this, Container1);

        return _possibleConstructorReturn(this, (Container1.__proto__ || Object.getPrototypeOf(Container1)).call(this, props));
    }

    _createClass(Container1, [{
        key: 'createListItems',
        value: function createListItems() {
            return this.props.users.map(function (user) {
                return React.createElement(
                    'li',
                    { key: user.id },
                    user.first,
                    ' ',
                    user.last
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'ul',
                    null,
                    this.createListItems()
                )
            );
        }
    }]);

    return Container1;
}(React.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Container1);