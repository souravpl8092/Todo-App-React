import {ADD_TODO,EDIT_TODO,TOGGLE_TODO,REMOVE_TODO} from "../const";

const initState={
    todos:[
        {text:"Dummy Task",id:1,isComplete:false}
        ]
}
export default function rootReducer(state=initState ,action) {
    switch (action.type) {
        case ADD_TODO:
            return {...state,todos:[{text:action.payload,isComplete:false,id:state.todos.length+1},...state.todos]};
        case REMOVE_TODO:
            return {...state,todos: state.todos.filter((todo)=> todo.id!==action.payload )};
        case TOGGLE_TODO:
            return  {...state, todos : state.todos.map(
                (todo)=>todo.id===action.payload ? {...todo,isComplete: !todo.isComplete} : todo
                )};
        case EDIT_TODO:
            return {...state,todos: state.todos.map((todo)=>
                    todo.id===action.payload.id ? action.payload :todo)};
        default:
            return state;

    }

}
