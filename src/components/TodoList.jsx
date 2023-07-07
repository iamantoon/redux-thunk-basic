import {useSelector, useDispatch} from 'react-redux';
import {onRemove, onToggle} from '../store/todos/todosActions';

const TodoList = () => {
    const dispatch = useDispatch();
    const {list: todos, status, error} = useSelector(state => state.todos);

    return (
        <div>
            Todos: {todos.length}. Status: {status}
            {error && <h4>{error}</h4>}
            <ul>
                {todos.map(todo => {
                    return <li key={todo.id}>
                        <input type='checkbox' checked={todo.completed} onChange={() => dispatch(onToggle(todo.id))} />
                        <span>{todo.title}</span>
                        <button onClick={() => dispatch(onRemove(todo.id))}>delete</button>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default TodoList;