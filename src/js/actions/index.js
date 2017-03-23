import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO, EDIT_LIST } from '../constants/actions'
import { ajax } from 'rxjs/observable/dom/ajax';

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

export const editTasklist = (l_id, text) => {
    return { type: EDIT_LIST, l_id, text }
}
