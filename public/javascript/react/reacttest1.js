var Vistor = React.createClass({
    render : function(){
        return (
            <div>
                <h1>Welcome!</h1>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <h2>uyi</h2>
        <Vistor />
    </div>,
    document.getElementById('example')
);
