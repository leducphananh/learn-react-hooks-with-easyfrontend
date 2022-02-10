import React, { useState } from 'react';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';

TodosPage.propTypes = {};

function TodosPage(props) {

    const [todoList, setTodoList] = useState([
        { id: 1, title: 'I love Easy Frontend! 😍' },
        { id: 2, title: 'We love Easy Frontend! 🥰' },
        { id: 3, title: 'They love Easy Frontend! 🚀' },
    ]);

    function handleTodoClick(todo) {
        const index = todoList.indexOf(todo);
        if (index < 0) return;

        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    function handleTodoFormSubmit(formValues) {
        // console.log(formValues);

        // Add new todo to current todo list
        const newTodo = {
            id: todoList.length + Math.floor(Math.random() * 1000),
            ...formValues,
        }
        console.log(newTodo);
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
    }

    return (
        <>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <TodoList todos={todoList} onTodoClick={handleTodoClick} />
        </>
    );
}

export default TodosPage;