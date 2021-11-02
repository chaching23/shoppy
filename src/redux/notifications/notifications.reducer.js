import notificationsTypes from "./notifications.types";

const initialState = {
    token: null,
    data: null,
    error: null
};

export const notificationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case notificationsTypes.SEND_NOTIFICATION:
        
            return {

            };
        case notificationsTypes.SEND_NOTIFICATION_TO_ALL:
            return {

            };
    
        default:
            return state;
    }
}