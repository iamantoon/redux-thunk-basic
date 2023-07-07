export const ADD_TODOS = '@@todos/ADD_TODOS';
export const SET_LOADING = '@@todos/SET_LOADING';
export const SET_ERROR = '@@todos/SET_ERROR';
export const ADD_TODO = '@@todos/ADD_TODO';
export const REMOVE_TODO = '@@todos/REMOVE_TODO';
export const TOGGLE_TODO = '@@todos/TOGGLE_TODO';

const addTodo = todo => ({
    type: ADD_TODO,
    payload: todo
});

const removeTodo = id => ({
    type: REMOVE_TODO,
    payload: id
});

const toggleTodo = id => ({
    type: TOGGLE_TODO, 
    payload: id
})

const addTodos = todos => ({
    type: ADD_TODOS,
    payload: todos
});

const setLoading = () => ({
    type: SET_LOADING
});

const setError = (err) => ({
    type: SET_ERROR,
    payload: err
})

export const loadTodos = () => (dispatch, _, client) => {
    dispatch(setLoading());

    client.get('https://jsonplaceholder.typicode.com/todos')
    .then(data => dispatch(addTodos(data)))
    .catch(error => dispatch(setError(error)))
}

export const createTodo = (title) => (dispatch, _, client) => {
    client.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false,
        usedId: 1
    })
    .then(data => dispatch(addTodo(data)))
    .catch(error => dispatch(setError(error)))
}

export const onRemove = (id) => (dispatch, _, client) => {
    client.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, {id})
    .then(() => dispatch(removeTodo(id)))
    .catch(error => dispatch(setError(error)))
}

export const onToggle = (id) => (dispatch, getState, client) => {
    const currentState = getState();
    client.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        ...currentState,
        completed: !currentState.completed
    })
    .then(() => dispatch(toggleTodo(id)))
    .catch(error => dispatch(setError(error)))
}