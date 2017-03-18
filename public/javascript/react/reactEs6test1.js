import {Componet2, a} from "../babel/reactEs6test2.js";

console.log(a);
console.log(Componet2);

class HelloMessage2 extends React.Component {
    render() {
        return(
            <div>
                <div>Hello world {this.props.name}</div>
            </div>
        );
    }
}
console.log(HelloMessage2);

class Test extends React.Component {
    render() {
        return(
            <div>
                <p>come on!</p>
            </div>
        );
    }
}

class Board extends React.Component{
    render(){
        return(
            <div>
                <HelloMessage2 name="leslie"/>
                <Test/>
                <Componet2/>
            </div>
        );
    }
}
ReactDOM.render(<Board/>, document.getElementById('example'));