import React from 'react';
import '../index.css';

function TodoItem({todo, onToggle, onDelete}) {
    return (
        <div className='flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md border border-gray-300 dark:border-gray-600'>
            <div className='flex items-center'>
                <input 
                    type="checkbox" 
                    checked={todo.completed} 
                    onChange={() => onToggle(todo.id)} 
                    className='mr-3 w-5 h-5 dark:bg-gray-700 dark:border-gray-500'
                />
                <span className={todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-gray-200'}> 
                    {todo.text}
                </span>
            </div>
            <button 
                onClick={() => onDelete(todo.id)}
                className='bg-red-500 dark:bg-red-700 text-white px-3 py-1 rounded hover:bg-red-600 dark:hover:bg-red-800 transition'>
                Delete
            </button>
        </div>
    );
}

export default TodoItem;