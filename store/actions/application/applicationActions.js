import applicationActionTypes from './applicationActionTypes'

export const setReduxApplicationData = (data) => (dispatch) => {
    try {
        dispatch({
            type: applicationActionTypes.SET_DATA,
            payload: data,
        })
    } catch (error) {
        console.log(error)
    }
}
