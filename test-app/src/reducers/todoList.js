const todoList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO_LIST':
            const addArr = [...state];
            addArr.push(action.data);
            return addArr;
        case 'DELETE_TODO_LIST':
            return state.filter((item) => item.id !== action.data);
        default:
            return state;    
    }
}
export default todoList;