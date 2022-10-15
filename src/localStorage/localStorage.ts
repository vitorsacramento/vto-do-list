import { Task } from "../Models/Task";
import { useToDoReducer } from "../reducers/toDoReducer";

export const getLocalStorage = (initialState: Task[]) => JSON.parse(localStorage.getItem('tasks') as string) || initialState;
 
export const setLocalStorage = (task: Task[]) => {
    window.localStorage.setItem('tasks', JSON.stringify(task));
}