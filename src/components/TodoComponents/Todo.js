import React from 'react';

const Todo = props => {
    return(
        <div className={`item${props.todo.item?'item' : ''}`}
             onClick={()=> props.toogleItem(props.todo.id)}
             >
                 <p {...props.todo.name}></p>

        </div>
    );
};
export default Todo;