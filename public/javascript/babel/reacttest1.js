'use strict';

var Vistor = React.createClass({
    displayName: 'Vistor',

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Welcome!'
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
    React.createElement(
        'h2',
        null,
        'uyi'
    ),
    React.createElement(Vistor, null)
), document.getElementById('example'));