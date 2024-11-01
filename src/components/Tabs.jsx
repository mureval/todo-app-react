import React from 'react'

const Tabs = ({ selectedTab, setSelectedTab, todos }) => {

    const tabs = ['All', 'Open', 'Completed']

    return (
        <nav>
            {tabs.map((tab, tabIndex) => {
                const numOfTasks = tab === "All" ? todos.length
                    : tab === "Open" ? todos.filter(value => !value.complete).length
                        : todos.filter(value => value.complete).length

                return (
                    <button
                        key={tabIndex}
                        className={'tab-button' + (tab === selectedTab ? ' tab-selected' : '')}
                        onClick={() => setSelectedTab(tab)}>
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )
            })}
            <hr />
        </nav>
    )
}

export default Tabs