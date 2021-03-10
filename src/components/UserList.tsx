import React, {FC, useEffect} from 'react';
import { useActions } from '../hooks/useActions';
import { useTypesSelector } from '../hooks/useTypedSelector';

const UserList: FC = () => {    
    const {users, error, loading} = useTypesSelector(state => state.user); 
    const {fetchUsers} = useActions();
    
    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    } 

    if (error) {
        return <h1>Error...</h1>
    }

    return (
        <div>
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    )

}

export default UserList;