import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Container3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        return(
            <div>
                <h1>jjj</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
};

export default connect(mapStateToProps)(Container3);