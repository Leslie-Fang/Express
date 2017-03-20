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

var Container2 = function (_React$Component) {
    _inherits(Container2, _React$Component);

    function Container2(props) {
        _classCallCheck(this, Container2);

        return _possibleConstructorReturn(this, (Container2.__proto__ || Object.getPrototypeOf(Container2)).call(this, props));
    }

    _createClass(Container2, [{
        key: 'render',
        value: function render() {
            if (!this.props.user) {
                return React.createElement(
                    'div',
                    null,
                    'Select a user...'
                );
            }
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    React.createElement('img', { src: this.props.user.thumbnail }),
                    React.createElement(
                        'h2',
                        null,
                        this.props.user.first,
                        ' ',
                        this.props.user.last
                    ),
                    React.createElement(
                        'h3',
                        null,
                        'Age: ',
                        this.props.user.age
                    ),
                    React.createElement(
                        'h3',
                        null,
                        'Description: ',
                        this.props.user.description
                    )
                )
            );
        }
    }]);

    return Container2;
}(React.Component);

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Container2);