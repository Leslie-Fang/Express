var rt1= require("../babel/component/reacttest1.js");
var Vistor = rt1.Vistor;
var Ad = rt1.Ad;

var Board = React.createClass({
    render : function(){
        return (
            <div>
                <h1>example2!</h1>
                <Ad/>
                <Vistor name="bob" age="100"/>
                <button className='btn btn-primary'>OK</button>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <Board/>
    </div>,
    document.getElementById('example2')
);

ReactDOM.render(
    <div>
        <h1>example3!</h1>
    </div>,
    document.getElementById('example3')
);