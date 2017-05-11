import React from 'react'
import ReactDOM from 'react-dom'
import Task from './Task.jsx'
import $ from 'jquery'

class TaskList extends React.Component {//= ({ tasks, tasklist, onTaskClick, onTaskChange }) => (
    constructor(props) {
        super(props)
        console.log("Tasklist", props)
        this.state = {
            value: props.text,
            dragging: false,
            pos: {
                x: 0,
                y: 0
            },
            z: 1,
            rel: null
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e) {
        this.setState({ value: e.target.value })
        this.props.onChange(e)
    }

    componentDidUpdate(props, state) {
        if (this.state.dragging && !state.dragging) {
            document.addEventListener('mousemove', this.onMouseMove.bind(this))
            document.addEventListener('mouseup', this.onMouseUp.bind(this))
        } else if (!this.state.dragging && state.dragging) {
            document.removeEventListener('mousemove', this.onMouseMove.bind(this))
            document.removeEventListener('mouseup', this.onMouseUp.bind(this))
        }
    }

    dragMove(e) {
        if (e.button !== 0) return
        console.log(this)
        //var pos = ReactDOM.findDOMNode(this).offset()

        this.setState({
            dragging: true,
            rel: {
                x: e.pageX - this.state.pos.x,
                y: e.pageY - this.state.pos.y
            }
        })
        e.preventDefault()
    }

    onMouseMove(e) {
        if (!this.state.dragging) return
        this.setState({
            pos: {
                x: e.pageX - this.state.rel.x,
                y: e.pageY - this.state.rel.y
            },
            z: 3
        })
        e.preventDefault()
    }

    onMouseUp(e) {
        this.setState({dragging: false, z: 1})
        e.preventDefault()
    }

    render() {
        var tasklist = this.props.tasklist
        var tasks = this.props.tasks
        return (
            <div style={{left: this.state.pos.x+'px', top: this.state.pos.y+'px', zIndex: this.state.z}} className="tasklist">
                <div onMouseDown={this.dragMove.bind(this)} className="tasklist-topbar"></div>
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
