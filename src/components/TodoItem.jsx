import React, { useEffect, useState } from "react";
import "../index.css";
import editLight from "../assets/img/edit-light.png";
import editDark from "../assets/img/edit-dark.png";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);
    const [isDarkMode, setIsDarkMode] = useState(
        document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        });

        observer.observe(document.documentElement, { attributes: true });

        return () => observer.disconnect();
    }, []);

    const handleSave = () => {
        if (newText.trim() !== "") {
            onEdit(newText, todo.id);
        }
        setIsEditing(false);
    };

    return (
        <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md border border-gray-300 dark:border-gray-600">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    className="mr-3 w-5 h-5 dark:bg-gray-700 dark:border-gray-500"
                />
                {isEditing ? (
                    <input
                        type="text"
                        value={newText}
                        onChange={(event) => setNewText(event.target.value)} // Updating state
                        onBlur={handleSave} // Saving when clicking outside
                        onKeyDown={(e) => e.key === "Enter" && handleSave()} // Saving when enter key is pressed
                        className="border p-1 rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
                        autoFocus
                    />
                ) : (
                    <div className="flex gap-2">
                        {!isEditing ? (
                            <img
                                src={isDarkMode ? editDark : editLight}
                                onClick={() => setIsEditing(true)}
                                className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform"
                                alt="Editing Icon"
                            />
                        ) : (
                            ""
                        )}
                        <span
                            className={
                                todo.completed
                                    ? "line-through text-gray-500 dark:text-gray-400"
                                    : "text-gray-800 dark:text-gray-200"
                            }
                        >
                            {newText}
                        </span>
                    </div>
                )}
            </div>
            <button
                onClick={() => onDelete(todo.id)}
                className="bg-red-500 dark:bg-red-700 text-white px-3 py-1 rounded hover:bg-red-600 dark:hover:bg-red-800 transition"
            >
                Delete
            </button>
        </div>
    );
}

export default TodoItem;
