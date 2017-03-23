import { ADD_TODO, DELETE_TODO, EDIT_TODO, EDIT_TODO__AJAX, TOGGLE_TODO } from '../constants/actions'


const task = (state = {}, action) => {
    switch (action.type)  {
        case ADD_TODO:
            return {
                    t_id: action.id,
                    done: false,
                    text: action.text
                }

        case TOGGLE_TODO:
            if (state.t_id !== action.t_id) {
                return state
            }
            return Object.assign({}, state, {
                done: !state.done
            })

        case EDIT_TODO:
            if (state.t_id !== action.t_id) {
                return state
            }
            return Object.assign({}, state, {
                text: action.text
            })

        default:
            return state
    }
}

const tasks = (state = {}, action) => {
    switch (action.type)  {
        case ADD_TODO:
            return [
                ...state,
                task(undefined, action)
            ]

        case TOGGLE_TODO:
            return state.map(t =>
                task(t, action)
            )

        case EDIT_TODO:
            return state.map(t =>
                task(t, action)
            )

        case EDIT_TODO__AJAX:
            //TODO: implement AJAX
            console.log('Sent imaginary AJAX update')

        default:
            return state
    }
}

export default tasks
