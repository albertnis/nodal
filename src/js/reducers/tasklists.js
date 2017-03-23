import { ADD_LIST, DELETE_LIST, EDIT_LIST } from '../constants/actions'


const tasklist = (state = {}, action) => {
    switch (action.type)  {
        case ADD_LIST:
            return {
                t_id: action.id,
                done: false,
                text: action.text
            }

        case EDIT_LIST:
            if (state.l_id !== action.l_id) {
                return state
            }
            return Object.assign({}, state, {
                text: action.text
            })

        default:
            return state
    }
}

const tasklists = (state = {}, action) => {
    switch (action.type)  {
        case ADD_LIST:
            return [
                ...state,
                task(undefined, action)
            ]

        case EDIT_LIST:
            console.log(action)
            return state.map(l =>
                             tasklist(l, action)
                            )

        default:
            return state
    }
}

export default tasklists
