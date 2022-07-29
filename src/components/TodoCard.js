const TodoCard = ({ id, title, completed, setupEdit }) => {
    return (
      <div>
        <p>Id: {id}</p>
        <p>{title}</p>
        <p>Completed: {`${completed}`}</p>
        <div className="todo-option">
          <button className="purple-btn">Mark as completed</button>
          <button onClick={() => setupEdit(id)}>delete</button>
        </div>
      </div>
    );
  };
  
  export { TodoCard };
  