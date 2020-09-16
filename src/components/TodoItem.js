import React from "react";


function TodoItem(props){
    return(
        <div className="todo-item">
            <input type="checkbox" checked ={props.item.checked}/><br/>
            <span>{props.item.task} </span>
        </div>
    )

}

export default TodoItem