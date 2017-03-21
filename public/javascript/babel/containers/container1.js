'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _index = require('../../babel/actions/index');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ selectUser: _index.selectUser, addUser: _index.addUser, deleteUser: _index.deleteUser, initUser: _index.initUser }, dispatch);
}

var Container1 = function (_React$Component) {
    _inherits(Container1, _React$Component);

    function Container1(props) {
        _classCallCheck(this, Container1);

        var _this = _possibleConstructorReturn(this, (Container1.__proto__ || Object.getPrototypeOf(Container1)).call(this, props));

        _this.props.initUser();
        return _this;
    }

    _createClass(Container1, [{
        key: 'createListItems',
        value: function createListItems() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'ul',
                    null,
                    this.props.users.map(function (user) {
                        return React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'li',
                                { key: user.id, onClick: function onClick() {
                                        return _this2.props.selectUser(user);
                                    } },
                                user.first,
                                ' ',
                                user.last
                            ),
                            React.createElement(
                                'button',
                                { className: 'btn btn-primary', onClick: function onClick() {
                                        return _this2.props.deleteUser(user);
                                    } },
                                'Delete'
                            )
                        );
                    })
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-primary', onClick: function onClick() {
                            return _this2.props.addUser();
                        } },
                    'Add'
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.createListItems()
            );
        }
    }]);

    return Container1;
}(React.Component);

//store.dispatch({ type: 'INCREMENT' });

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(Container1);