import { TEST_CALL } from './actionTypes';


export const testCall = (data) => {
    return {
        type: TEST_CALL,
        data: data
    }
} 