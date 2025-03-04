import React, {useState} from 'react'

const AddTodoForm = ({onAdd}) => {
    const [text, setText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.trim() === "") {
            return;
        }
        onAdd(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className='flex gap-2'>
            <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder='Enter a task...'
            className='border p-2 flex-grow rounded'/>
            <button type='submit' 
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>Add</button>
        </form>
    )
}

export default AddTodoForm;