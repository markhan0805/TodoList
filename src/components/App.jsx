import React, { useState, useEffect } from "react";
import "../index.css";
import TodoList from "./TodoList";


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
    
    return (
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo}/>
    );
}

export default App;
