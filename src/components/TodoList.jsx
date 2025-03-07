import React from "react";
import TodoItem from "./TodoItem";

function TodoList({todos, onToggle, onDelete, onEdit}) {
    return (
        <div className="space-y-3 mt-4">
            {
                todos.length === 0 ? (
                    <p className="text-gray-500 text-center">No tasks yet! Add one above.</p>
                ) : (
                    todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit}/>
                    ))
                )
            }
        </div>
    );
}

export default TodoList;