import { UserActionType } from "./user.type";

const INITIAL_STATE = {
    currentUser : null
}

const userReducer = ( state =  INITIAL_STATE, action) => {

    if(action.type === UserActionType.SET_CURRENT_USER)
    return {
        ...state, 
        currentUser : action.payload
        }
    else
    return state;
}

export default userReducer;
