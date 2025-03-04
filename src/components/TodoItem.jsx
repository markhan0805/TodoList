import React from 'react';
import '../index.css';

function TodoItem({todo, onToggle, onDelete}) {
    return (
        <div className='flex justify-between items-center bg-white p-3 rounded-lg shadow-md border border-gray-300'>
            {/* Checkbox for completion */}
            <div>
                <input 
                    type="checkbox" 
                    checked={todo.completed} 
                    onChange={() => onToggle(todo.id)} 
                    className='mr-3 w-5 h-5'
                />
                <span className={todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}> 
                    {todo.text}
                </span>
            </div>
            {/* Delete Button */}
            <button 
                onClick={() => onDelete(todo.id)}
                className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition'>
                Delete
            </button>
        </div>
    );
}

export default TodoItem;