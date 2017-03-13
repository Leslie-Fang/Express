var Vistor = React.createClass({
    render : function(){
        return (
            <div>
                <h1>Welcome!</h1>
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
        this.setState({editing:true});
    },
    delete : function(){
       // alert('delete');
        this.props.removeitem(this.props.index);
    },
    save : function(){
        //var val =this.refs.changeText.value;
        //console.log(val);
        this.setState({editing:false,text:this.refs.changeText.value});
    },
    normalrender : function(){
        return (
            <div>
                <p>{this.state.text}</p>
                <button onClick={this.edit}>Edit</button>
                <button onClick={this.delete}>Delete</button>
            </div>
        );
    },
    editrender : function(){
        return (
            <div>
                <textarea ref="changeText" defaultValue={this.props.children}></textarea>
                <button onClick={this.save}>Save</button>
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
               <Checkoutbox></Checkoutbox>
               {
                   this.state.comments.map(this.eachComment)
               }
           </div>
       );
   }
});

ReactDOM.render(
    <Board />,
    document.getElementById('example')
);

module.exports = Vistor;