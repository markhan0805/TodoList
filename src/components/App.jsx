import React, { useState, useEffect } from "react";
import "../index.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import DarkModeToggle from "./DarkModeToggle";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos"));
        if (savedTodos && savedTodos.length > 0) {
            setTodos(savedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const onAdd = (text) => {
        setTodos([
            ...todos,
            {
                id: Date.now(),
                completed: false,
                text,
            },
        ]);
    };

    const onEdit = (newText, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        );
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-4">
            <div className="max-w-md mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold">Todo List</h1>
                    <DarkModeToggle />
                </div>
                <AddTodoForm onAdd={onAdd} />
                <TodoList
                    todos={todos}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                    onEdit={onEdit}
                />
            </div>
        </div>
    );
}

export default App;
