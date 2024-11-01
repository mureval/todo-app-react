import React, { useState } from 'react'

const TodoInput = ({ handleAddTodo }) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className='input-container'>
      <input value={inputValue} onChange={(e) => handleInputChange(e)} placeholder='Add task' />
      <button onClick={() => {
        if (!inputValue) { return }
        handleAddTodo(inputValue)
        setInputValue('')
      }}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  )
}

export default TodoInput