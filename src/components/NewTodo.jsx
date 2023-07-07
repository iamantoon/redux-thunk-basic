import {useDispatch} from 'react-redux';
import {createTodo} from './../store/todos/todosActions';

const NewTodo = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createTodo(event.target.title.value));
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='title' placeholder='Title todo' />
            <input type='submit' value='Add todo' />
        </form>
    );
}

export default NewTodo;