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
        var domid = 'task-check-'+this.props.t_id;
        return (
            <div className="task">
                <div className="task-check-container">
                    <input placeholder="Create new task..." className="task-check" id={domid} type="checkbox" onChange={this.handleCheckboxChange} checked={done} />
                    <label className="task-check-label" htmlFor={domid}><svg className="task-check-tick" viewBox="0 0 16 16">
                        <polyline fill="none" stroke="#000000" strokeLinecap="square" strokeWidth="2" strokeMiterlimit="10" points="1.333,7.934 5.778,13.316 14.667,2.551 "/></svg>
                        </label>
                </div>
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
