"use strict";

var rt1 = require("../babel/component/reacttest1.js");
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