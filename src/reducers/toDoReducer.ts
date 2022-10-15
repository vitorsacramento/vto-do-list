import { useReducer } from "react"
import { listActionType } from "../Models/ListActionType";
import { Task } from "../Models/Task";
import { v4 as uuid } from 'uuid';
import { getLocalStorage } from "../localStorage/localStorage";

const initialState: Task[] = [];

const reducer = (state: Task[], action: listActionType) => {
    switch (action.type) {
        case 'ADD':
            if (action.payload?.title && action.payload?.description) {
                const newState = [...state];
                newState.push({
                    id: uuid(),
                    title: action.payload?.title,
                    description: action.payload?.description,
                    data: new Date()
                })

                return newState;
            }
        case 'DEL':
            if(action.payload?.id) {
                let newState = [...state];
                newState = newState.filter(item => item.id !== action.payload?.id); 
                return newState;
            }
        case 'ORDER':
            let newState = [...state];
            newState = newState.sort((a, b) => (a.title > b.title) ? 1 : -1);              
    }

    return state;
}

export const useToDoReducer = () => {
    return useReducer(reducer, initialState, getLocalStorage);
}