import React from 'react'
import TaskListContainer from '../containers/TaskListContainer.jsx'

const Project = ({ tasklists, onTasklistChange }) => (
    <div className="project">
        {tasklists.map(tasklist =>
            <TaskListContainer
                key={tasklist.l_id}
                onChange={(event) => onTasklistChange(tasklist.l_id, event.target.value)}
                {...tasklist}
             />
        )}
    </div>
)

export default Project
