const TodoCard = ({ id, title, completed, setupEdit }) => {
    return (
      <div className="todo">
        <p>Id: {id}</p>
        <p className="todo-title">{title}</p>
        <p>Completed: {`${completed}`}</p>
        <div className="todo-option">
          <button className="purple-btn">Mark as completed</button>
          <button onClick={() => setupEdit(id)}>delete</button>
        </div>
      </div>
    );
  };

  export { TodoCard };
