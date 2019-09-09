import * as types from '../constants'
import { bake_cookie , read_cookie , delete_cookie } from 'sfcookies'

const reminders = (action) => {
    const {text , dueDate} = action;

    return {
        text ,
        dueDate ,
        id: Math.random()
    }
}

const reminder = (state =read_cookie('reminderData')||[] , action = {}) => {
    let reminderData = '';

    switch (action.type) {
        case types.ADD_REMINDER:
            reminderData = [
                ...state ,
                reminders(action)
            ];
            bake_cookie("reminderData",reminderData);

            return reminderData
        case types.DELETE_REMINDER:
            reminderData = state.filter(reminder => reminder.id !== action.id);
            bake_cookie("reminderData",reminderData);
            return reminderData;
        case types.CLEAR_REMINDERS:
            reminderData = [];
            delete_cookie('reminderData');

            return reminderData;

        default:
            return state;
    }


}

export default reminder;