
const initialState = {
    currentUser: 1000,
}

const userReducer = (state = initialState, action) => {
    if (action.type === 'user/login') {
        return {
            ...state,
            currentUser: 100
        }
    }

    return state;
}

export default userReducer;