import React, { useState, useEffect } from "react";
import "../index.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


function App() {
    const exampleTodos = [
        {id: 1, completed: false, text: "Finish the job"},
        {id: 2, completed: true, text: "Study for midterm"},
        {id: 3, completed: false, text: "Learn React+TailwindCSS"}
    ];
    const [todos, setTodos] = useState(exampleTodos);

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    };
    
    const deleteTodo = (id) => {
        setTodos(
            todos.filter((todo) => {
                return todo.id === id ? false : true;
            })
        );
    }

    const onAdd = (text) => {
        setTodos(
            [...todos, 
                {
                id: Date.now(),
                completed: false,
                text
                }
            ]
        );
    }
    
    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-4">Todo List</h1>
            <AddTodoForm onAdd={onAdd}/>
            <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo}/>
        </div>
    );
}

export default App;
