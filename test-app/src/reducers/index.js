import { combineReducers } from 'redux';
import count from './count';
import todoList from './todoList';

const reducer = combineReducers({
    count,
    todoList
});

export default reducer;

