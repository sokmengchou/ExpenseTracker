import { combineReducers } from 'redux'
import authReducer  from './auth.reducer'
import testReducer from './test.reducer'
import dataReducer from './data.reducer'

export default combineReducers({
    authReducer,
    testReducer,
    dataReducer

})