import React from 'react'

const Header = ({ todos }) => {

    const isTaskPlural = todos.length != 1

    const isTaskOrTasks = isTaskPlural ? "tasks" : "task"

    return (
        <header>
            <h1 className='text-gradient'>You have {todos.length} open {isTaskOrTasks}.</h1>
        </header>
    )
}

export default Header