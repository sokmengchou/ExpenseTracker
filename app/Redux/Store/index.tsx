import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../Reducers'
import createSagaMiddleware from 'redux-saga'
import mySaga from '../Sagas'
const sagaMiddleware = createSagaMiddleware()
export default createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)
