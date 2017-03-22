import React from 'react'
import Task from './Task.jsx'

const TaskList = ({ tasks, onTaskClick, onTaskChange }) => (
    <ul>
        {tasks.map(task =>
            <Task
                key={task.t_id}
                {...task}
                onClick={() => onTaskClick(task.t_id)}
                onChange={(event) => onTaskChange(task.t_id, event.target.value)}
            />
        )}
    </ul>
)

export default TaskList;
