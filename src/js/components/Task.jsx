import React from 'react'

class Task extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {value: props.text}
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleCheckboxChange = props.onClick.bind(this)
    }

    handleInputChange(e) {
        this.setState({ value: e.target.value })
        this.props.onChange(e)
    }

    render() {
        var done = (this.props.done)
        return (
            <div className="task">
                <input className="task-check" type="checkbox" onChange={this.handleCheckboxChange} checked={done} />
                <input className="task-text" type="text"
                    onChange={this.handleInputChange}
                    style={{
                        textDecoration: done ? 'line-through' : 'none'
                    }}
                    value={this.state.value}
                    />
            </div>
        )
    }


}

/*const Task = ({ onClick, onChange, done, text }) => (
    <div>
        <input type="checkbox" onChange={onClick} checked={done} />
        <input className="task-text" type="text"
            onChange={onChange}
            style={{
                textDecoration: done ? 'line-through' : 'none'
            }}
            value={this.state.value}
        />
    </div>
)*/

export default Task;
