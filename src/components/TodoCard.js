import React from 'react'

const TodoCard = (props) => {
    const { todo } = props;
    const { id, title, completed} = todo;
    return(
        <div className='todo-list'>
        <div>
        <h4>{id} {title}</h4>
        <h6>{`Completed: ${completed}`}</h6>
        <button>Mark as completed</button>
        <button>Delete</button>
        </div>
         </div>
    )
}

export default TodoCard;