import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import TodoList from './components/todoList/index';

const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
        <App store={store} />
        {/* <TodoList store={store}/> */}
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

// store.subscribe();