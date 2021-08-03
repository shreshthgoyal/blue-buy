import { UserActionType } from "./user.type";

export const setCurrentUser = user => ({
    type: UserActionType.SET_CURRENT_USER,
    payload : user
})