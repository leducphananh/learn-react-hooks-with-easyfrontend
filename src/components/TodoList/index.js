import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
}

function TodoList(props) {

    const { todos, onTodoClick } = props;

    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.title}
                    <span
                        onClick={() => handleClick(todo)}
                        style={{ cursor: 'pointer' }}
                    >
                        &nbsp;&nbsp;
                        &times;
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;