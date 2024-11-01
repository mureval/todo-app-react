import React from 'react'
import TodoCard from './TodoCard'

const TodoList = ({ todos, selectedTab, handleCompleteTodo, handleDeleteTodo }) => {

    const filterTodosList = selectedTab === 'All' ? todos
        : selectedTab === 'Completed' ? todos.filter(val => val.complete)
            : todos.filter(val => !val.complete)

    return (
        <>
            {filterTodosList.map((todo, todoIndex) => {
                return (
                    <TodoCard
                        key={todoIndex}
                        todo={todo}
                        todoIndex={todos.findIndex(val => val.input === todo.input)}
                        handleCompleteTodo={handleCompleteTodo}
                        handleDeleteTodo={handleDeleteTodo}
                    />
                )
            })}
        </>
    )
}

export default TodoList