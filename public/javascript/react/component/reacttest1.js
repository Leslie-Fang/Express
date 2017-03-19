var Vistor = React.createClass({
    render : function(){
        return (
            <div>
                <h1>Welcome hhh!</h1>
                <h2>{this.props.name} is {this.props.age}</h2>
            </div>
        );
    }
});

var Comment = React.createClass({
    getInitialState:function(){
        return {editing:false,text:this.props.children};
    },
    edit : function(){
        //alert('edit');
        this.setState({editing:true});
    },
    delete : function(){
       // alert('delete');
        this.props.removeitem(this.props.index);
    },
    save : function(){
        //var val =this.refs.changeText.value;
        //console.log(val);
        //alert('save');
        this.setState({editing:false,text:this.refs.changeText.value});
    },
    normalrender : function(){
        return (
            <div>
                <p>{this.state.text}</p>
                <button onClick={this.edit} className='btn btn-primary'>Edit</button>
                <button onClick={this.delete} className='btn btn-danger'>Delete</button>
            </div>
        );
    },
    editrender : function(){
        return (
            <div>
                <textarea ref="changeText" defaultValue={this.state.text}></textarea>
                <button onClick={this.save} className='btn btn-primary'>Save</button>
            </div>
        );
    },
    render : function(){
        if(this.state.editing){
            return this.editrender();
        }else{
            return this.normalrender();
        }
    }
});

var Checkoutbox = React.createClass({
    getInitialState: function() {
        return {checked:true};
    },
    changeState : function(){
        this.setState({checked:!(this.state.checked)});
    },
    render : function(){
        var msg;
        if(this.state.checked){
            msg = "checked";
        }else{
            msg = "unchecked";
        }
        return (
            <div>
                <input type="checkbox" onChange={this.changeState} defaultChecked = {this.state.checked}/>
                <p>This is {msg}!</p>
            </div>
        );
    }

});

var Board = React.createClass({

    getInitialState: function(){
        return {comments:['a','b','c']};
    },
    eachComment :function(text,i){
        return <Comment key={i} index={i} removeitem={this.remove}>{text}</Comment>
    },
    remove : function(i){
        var arr = this.state.comments;
        arr.splice(i,1);
        this.setState({comments:arr});
    },
    render : function(){
        return (
            <div>
                <Vistor name="leslie" age="10"/>
                <Checkoutbox/>
                {
                    this.state.comments.map(this.eachComment)
                }
            </div>
        );
    }
});

var Ad = React.createClass({
    render : function(){
        return (
            <div>
                <h3>adadad</h3>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <Board />
    </div>,
    document.getElementById('example')
);

module.exports = {Vistor: Vistor,Ad:Ad};
