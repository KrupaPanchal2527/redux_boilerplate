// import action types (yes that' all we need to import in order to start working with reducers)
import { TEST_CALL } from '../actions/actionTypes';

const initialState = {
    message: ''
};

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST_CALL:
            return {
                ...state, //don't forget this
                message: 'Hello World!'
            }
        default:
            return state;
    }
}

export default testReducer;