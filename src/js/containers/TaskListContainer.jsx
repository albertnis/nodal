import { connect } from 'react-redux'
import { toggleTodo, editTodo } from '../actions'
import TaskList from '../components/TaskList.jsx'

const mapStateToProps = (state, props) => {
    console.log(props)
    return {
        tasks: state.tasks.filter(task => task.l_id == props.l_id),
        tasklist: props
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskClick: (t_id) => {
            dispatch(toggleTodo(t_id))
        },

        onTaskChange: (t_id, text) => {
            console.log(text)
            dispatch(editTodo(t_id, text))
        }
    }
}

const TaskListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList)

export default TaskListContainer
