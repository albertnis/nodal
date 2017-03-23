import React from 'react'
import Task from './Task.jsx'

class TaskList extends React.Component {//= ({ tasks, tasklist, onTaskClick, onTaskChange }) => (
    constructor(props) {
        super(props)
        console.log("Tasklist", props)
        this.state = {value: props.text}
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e) {
        this.setState({ value: e.target.value })
        this.props.onChange(e)
    }


    render() {
        var tasklist = this.props.tasklist
        var tasks = this.props.tasks
        return (
            <div className="tasklist">
                <input value={this.state.value} onChange={this.handleInputChange} className="tasklist-title" />
                <ul className="tasklist-list">
                    {tasks.map(task =>
                        <Task
                            key={task.t_id}
                            {...task}
                            onClick={() => this.props.onTaskClick(task.t_id)}
                            onChange={(event) => this.props.onTaskChange(task.t_id, event.target.value)}
                        />
                    )}
                </ul>
            </div>
        )
    }
}

export default TaskList
