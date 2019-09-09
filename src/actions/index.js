import * as types from '../constants'
import axios from 'axios'

export const  addReminder=(text,dueDate)=>{
    return{
        type:types.ADD_REMINDER,
        text,
        dueDate,

    }
};

export const deleteReminder=(id)=>{
    return{
        type:types.DELETE_REMINDER,
        id
    }
}

export const clearReminders=()=>{
    return{
        type:types.CLEAR_REMINDERS,
    }
}