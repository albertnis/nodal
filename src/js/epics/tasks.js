import 'rxjs'
import { EDIT_TODO, EDIT_TODO_QUEUED, EDIT_TODO__AJAX } from '../constants/actions'

const proAction = (action$) => {
    return action$.filter(action => action)
}

export const editTaskEpic = action$ => {
    return action$.ofType(EDIT_TODO)
        .debounceTime(3000) // Asynchronously wait 1000ms then continue
        .mapTo({ type: EDIT_TODO__AJAX, action: proAction(action$) })
}
