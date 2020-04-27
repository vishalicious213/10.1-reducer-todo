import React from 'react';

const handleChange = event => {
    console.log(event.target.value)
}

const AddToDo = () => {
    return (
        <div>
            <div>Add Todo</div>
            <form>
                <input type='text' 
                    name='newTodo'
                    value=''
                    onChange={handleChange}
                />
                <button type='submit'>
                    Add Item
                </button>
            </form>
        </div>
    )
}

export default AddToDo;

// 1. input field takes string
// 2. adds string to state