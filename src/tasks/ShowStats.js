import React from 'react'

const ShowStats = ({tasks}) => {
    const activeTasks = tasks.filter(task => task.status === 'Active');
    const doneTasks = tasks.filter(task => task.status === 'Done');
    return (
        <div>
            <h5>Total Tasks: {tasks.length}</h5>            
            <h5>Active Tasks: {activeTasks.length}</h5>
            <h5>Done Tasks: {doneTasks.length}</h5>
        </div>
    )
}

export default ShowStats
