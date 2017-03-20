import Container1 from "../../babel/containers/container1.js";
import Container2 from "../../babel/containers/container2.js";
import Container3 from "../../babel/containers/container3.js";

export class Componet2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div><p>component2</p></div>);
    }
};

export class Myheader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div><p>Header</p></div>);
    }
};


export class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            todo:[
                {id:1,test:'apple',complete:false},
                {id:2,test:'banana',complete:false}
            ]
        };
    }
    eachtodo(text,i){
        return (<div key={i}>{text.test}</div>)
    }
    render() {
        return (
            <div>
                <p>Todolist2</p>
                {
                  this.state.todo.map((text,i)=>{
                  return (<div key={i}>{text.test}</div>)})
                }
            </div>);
    }
};

//ReactDOM.render(<componet2/>, document.getElementById('example2'));


export class HelloMessage2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <div>Hello world {this.props.name}</div>
            </div>
        );
    }
}

export class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing:false,
            text:'Test state',
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log('Success!'); // null
    }
    render() {
        return(
            <div>
                <p>come on!</p>
                <p onClick={this.handleClick}>{this.state.text}</p>
            </div>
        );
    }
}

export class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <h2>User List</h2>
                <Container1 />
                <hr />
                <h2>User Details</h2>
                <Container2 />
                <hr />
                <h2>User Add</h2>
                <Container3 />
            </div>
        );
    }
}

