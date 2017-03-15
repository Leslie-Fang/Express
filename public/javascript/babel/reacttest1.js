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

module.exports = { Vistor: Vistor };