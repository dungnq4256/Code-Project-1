import * as Types from './../constants/ActionTypes';

export const saveUserToRedux = (signedInUser) => {
    return {
        type: Types.SAVE_USER_TO_REDUX,
        payload: signedInUser
    }
}

export const removeUserOutOfRedux = (signedInUser) => {
    return {
        type: Types.REMOVE_USER_OUT_OF_REDUX,
        payload: signedInUser
    }
}
