import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


function mapStateToProps(state) {
    return ({
        users: state.users
    });
}

class Container1 extends React.Component {
    constructor(props) {
        super(props);
    }
    createListItems(){
        return this.props.users.map((user)=>{return (<li key={user.id}>{user.first} {user.last}</li>)});
    }
    render() {
        return(
            <div>
                <ul>
                    {this.createListItems()}
                </ul>
            </div>
        );
    }
}
export default connect(mapStateToProps)(Container1);