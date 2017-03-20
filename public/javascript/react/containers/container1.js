import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUser,addUser,deleteUser} from '../../babel/actions/index';

function mapStateToProps(state) {
    return ({
        users: state.users
    });
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser,addUser: addUser,deleteUser: deleteUser}, dispatch);
}

class Container1 extends React.Component {
    constructor(props) {
        super(props);
    }
    createListItems(){
        return(
            <div>
                <ul>
                    {this.props.users.map((user)=>{return(
                        <div>
                            <li key={user.id} onClick={()=>this.props.selectUser(user)}>{user.first} {user.last}</li>
                            <button className='btn btn-primary' onClick={()=>this.props.deleteUser(user)}>Delete</button>
                        </div>
                    )})}
                </ul>
                <button className='btn btn-primary' onClick={()=>this.props.addUser()}>Add</button>
            </div>
        );
    }
    render() {
        return(
            <div>
                {this.createListItems()}
            </div>
        );
    }
}


export default connect(mapStateToProps,matchDispatchToProps)(Container1);