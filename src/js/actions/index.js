import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from '../constants/actions'

export const addTodo = (text) => {
    return { type: ADD_TODO, text }
}

export const toggleTodo = (t_id) => {
    return { type: TOGGLE_TODO, t_id }
}

export const editTodo = (t_id, text) => {
    return {type: EDIT_TODO, t_id, text }
}

export const deleteTodo = (index) => {
    return { type: DELETE_TODO, index }
}
