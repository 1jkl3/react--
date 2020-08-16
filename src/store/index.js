import {createStore,combineReducers} from 'redux';
import {redurcer} from './reducer';

// 将所有的reducer整合到一起
export const reducer = combineReducers({
    redurcer
});

export default createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined);