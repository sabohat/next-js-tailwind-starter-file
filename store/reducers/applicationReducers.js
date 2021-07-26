import applicationActionTypes from '../actions/application/applicationActionTypes'

const initialCartState = {
    data: null,
}

const cartReducers = (state = initialCartState, action) => {
    const { payload } = action
    switch (action.type) {
        case applicationActionTypes.SET_DATA:
            return {
                ...state,
                map: payload,
            }
        default:
            return state
    }
}

export default cartReducers
