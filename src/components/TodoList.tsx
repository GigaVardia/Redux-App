import React, {FC, useEffect} from 'react';
import { useActions } from '../hooks/useActions';
import { useTypesSelector } from '../hooks/useTypedSelector';

const UserList: FC = () => {    
    const {page, error, todos, limit, loading} = useTypesSelector(state => state.todo);
    const {fetchTodos, SetTodoPage} = useActions();
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])


    if (loading) {
        return <h1>Loading...</h1>
    } 

    if (error) {
        return <h1>Error...</h1>
    }

    return (
        <div>
            {todos.map(todo => 
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}

            <div style={{display: "flex"}}>
                {
                    pages.map(p => 
                        <div 
                            style={{border: p === page ? '2px solid green' : '1px solid black', padding: '10px'}}
                            onClick={() => SetTodoPage(p)}
                        >
                            {p}
                        </div>
                    )
                }
            </div>
        </div>
    )

}

export default UserList;