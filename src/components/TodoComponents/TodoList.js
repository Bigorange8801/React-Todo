// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';


const TodoList = props => {
    return(
        <div className="todo-list">
            {props.todoItem.map(todo => (
                <Todo key ={todo.id} todo={todo} toogleItem={props.toggleItem}/>
            ))}
            <button className="clear-list" onClick={props.clearList}>
                Clear List
            </button>
        </div>
    );
};

export default TodoList;
