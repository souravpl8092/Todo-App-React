import {ADD_TODO,REMOVE_TODO,EDIT_TODO,TOGGLE_TODO} from "../const";

export const addTodo=(text)=>(
    {
        type: ADD_TODO,
        payload: text
    }
);
export const removeTodo=(id)=>(
   {
       type: REMOVE_TODO,
       payload: id

   }
);
export const toggleTodo=(id)=>(
    {
        type: TOGGLE_TODO,
        payload: id
    }
);
export const editTodo=(todo)=>({
        type: EDIT_TODO,
        payload: todo
    });

