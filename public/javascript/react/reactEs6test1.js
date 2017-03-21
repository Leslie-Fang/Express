import {Provider} from 'react-redux';
import {Componet2, Myheader,Todolist,HelloMessage2,Test,App} from "../babel/component/reactEs6test2.js";
import {store} from "../babel/store.js"

class Board extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Provider store={store}>
                <div>
                    <Myheader/>
                    <HelloMessage2 name="leslie"/>
                    <Test/>
                    <Componet2/>
                    <Todolist/>
                    <App />
                </div>
            </Provider>
        );
    }
}
ReactDOM.render(<Board/>, document.getElementById('example'));








