import { connect } from 'react-redux'
import { editTasklist } from '../actions'
import Project from '../components/Project.jsx'

const mapStateToProps = (state) => {
    return {
        tasklists: state.tasklists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTasklistChange: (l_id, text) => {
            console.log(text)
            dispatch(editTasklist(l_id, text))
        }
    }
}

const ProjectContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Project)

export default ProjectContainer
