import { combineReducers } from 'redux'
import { notificationsReducer } from './notifications/notifications.reducer'
const rootReducer = combineReducers({
    notifications: notificationsReducer
})

export default rootReducer;