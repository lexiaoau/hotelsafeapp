import {
    CHANGE_PIN_ADD,
    CHANGE_PIN_CLEAR,
    CHANGE_PIN_TOGGLE_LOCK
   } from './constants';


export const addNumber = (text) => ({ type: CHANGE_PIN_ADD, payload: text })
export const clearPin = () => ({ type: CHANGE_PIN_CLEAR})
export const changeLockStatus = () => ({ type: CHANGE_PIN_TOGGLE_LOCK})
