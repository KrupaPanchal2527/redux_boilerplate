// import a function which will combine all reducers and make them one 
import { combineReducers } from 'redux';

// import all reducers
import testReducer from './testReducer';

const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer;