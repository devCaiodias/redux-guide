import UserActionTypes from "./action-type"

export const loginUser = (payload) => ({
    type: UserActionTypes.LOGIN,
    payload
})

export const logoutUser = () => ({ 
    type: UserActionTypes.LOGOUT
})