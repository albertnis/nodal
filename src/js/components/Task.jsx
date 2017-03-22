import React from 'react'


const Task = ({ onClick, onChange, done, text }) => (
    <div>
        <input type="checkbox" onChange={onClick} checked={done} />
        <input className="task-text" type="text"
            onChange={onChange}
            style={{
                textDecoration: done ? 'line-through' : 'none'
            }}
            value={text}
        />
    </div>
)

export default Task;
