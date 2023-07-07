import {useSelector} from 'react-redux';

const UserList = () => {
    const {users, status, error} = useSelector(state => state.users);
    
    return (
        <div>
            Users: {users.length}. Status: {status}
            {error && <h4>{error}</h4>}
        </div>
    );
}

export default UserList;