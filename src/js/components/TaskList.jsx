import React from 'react';
import Task from './Task.jsx';

class TaskList extends React.Component {
    render() {
        return (
            <div>
                A Tasklist:
                <Task />
            </div>
        );
    }
};

export default TaskList;
