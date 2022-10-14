import { useReducer } from "react"
import { listActionType } from "../Models/ListActionType";
import { Task } from "../Models/Task";
import { v4 as uuid } from 'uuid';

const initialState: Task[] = [];

const reducer = (state: Task[], action: listActionType) => {
    switch (action.type) {
        case 'ADD':
            if (action.payload?.title && action.payload?.description) {
                state.push({
                    id: uuid(),
                    title: action.payload?.title,
                    description: action.payload?.description
                })
            }
        case 'DEL':
            if(action.payload?.id) {
                state = state.filter(item => item.id !== action.payload?.id); 
            }
        case 'ORDER':
            state = state.sort((a, b) => (a.title > b.title) ? 1 : -1);              
    }

    return state;
}

export const useToDoReducer = () => {
    return useReducer(reducer, initialState);
}