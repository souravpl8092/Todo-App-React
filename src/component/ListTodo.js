import React from'react'
import {connect} from 'react-redux'
import CradTodo from "./CardTodo";
const ListTodo=({todoList})=>{
    return(
        <div className="todo-list">
          {todoList.map((el) =>
            <CradTodo todo={el} key={el.id}/>
        )}
        </div>
    )
};
const mapStateToProps=(state)=>({
    todoList:state.todos,
});
export default connect(mapStateToProps)(ListTodo);
