import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Container2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        return(
            <div>
                <div>
                    <img src={this.props.user.thumbnail} />
                    <h2>{this.props.user.first} {this.props.user.last}</h2>
                    <h3>Age: {this.props.user.age}</h3>
                    <h3>Description: {this.props.user.description}</h3>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
};

export default connect(mapStateToProps)(Container2);

