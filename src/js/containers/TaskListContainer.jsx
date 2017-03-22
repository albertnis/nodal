import { connect } from 'react-redux'
import { toggleTodo, editTodo } from '../actions'
import TaskList from '../components/TaskList.jsx'

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskClick: (t_id) => {
            dispatch(toggleTodo(t_id))
        },

        onTaskChange: (t_id, text) => {
            dispatch(editTodo(t_id, text))
        }
    }
}

const TaskListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList)

export default TaskListContainer
