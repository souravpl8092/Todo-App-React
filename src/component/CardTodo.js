import React from'react'
import {connect} from 'react-redux'
import {removeTodo,editTodo,toggleTodo} from "../js/actions";
import EditForm from './EditForm'

const CradTodo =({todo,toggleTodo,removeTodo})=>{
    return(
        <div className="todo-card" >
            <p style={todo.isComplete?{textDecoration:"line-through",opacity:0.5}: {}}>
                {todo.text}
            </p>
            <button onClick={()=>toggleTodo(todo.id)}>{todo.isComplete? "Undo" : "Complete" }</button>
            <button onClick={()=>removeTodo(todo.id)}>Delete</button>
           <EditForm todo={todo}/>
        </div>
    )
};

export default connect(null,{toggleTodo,editTodo,removeTodo})(CradTodo);
