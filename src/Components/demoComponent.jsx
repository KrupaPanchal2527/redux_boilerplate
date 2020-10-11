import React, { Component } from 'react';

// wrap your component to provide access to redux Store
import { connect } from 'react-redux';

// import actions you need 
import { testCall } from '../Store/actions/actions';

class DemoComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { message, testCall } = this.props;
        return (
            <div>
                <p>Message from store: {message || 'No message, click the below button'}</p>
                <button onClick={testCall}>Update Message</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.test.message
    }
}

// In order to access action here we need to import them
const mapDispatchToProps = (dispatch) => ({
    testCall: () => dispatch(testCall()),
});

// different ways of mapDispatchToProps
/*
1. const mapDispatchToProps = {
    testCall
}
*/
/*
2. const mapDispatchToProps = dispatch => ({
  testCall: () => dispatch(testCall()),
})
*/


// connect syntax 'connect(mapStateToProps, mapDispatchToProps)(component_name)
export default connect(mapStateToProps, mapDispatchToProps)(DemoComponent);