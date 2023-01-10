import React,{useState} from 'react';
import {connect} from 'react-redux'
import {addTodo} from "../js/actions";

const AddTodo=({addTodo})=>{
    const [text,setText]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newText=text;
        addTodo(newText);
        setText("");

    };

    return(
        <div className="add-todo-container">
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} required/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
export default connect(null,{addTodo})(AddTodo);
