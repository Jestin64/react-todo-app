import React from "react";
import todolistdata from "../todolistdata";
import "../style.css";
import TodoItem from "./TodoItem";


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            todos : todolistdata,
        }
        this.HandleChange = this.HandleChange.bind(this)
    }

    HandleChange(id){
        this.setState((prevState)=>{
            let updatedtodos = prevState.todos.map((todo_item)=>{
                if(todo_item.id === id){
                    return {
                        ...todo_item,
                        completed: !todo_item.completed
                    }
                }
                return todo_item   
            })
            return {
                todos: updatedtodos
            }
        })
    }


    render(){
        const tododata = this.state.todos.map((item) =>{
            return(
                <TodoItem key={item.id} item = {item} HandleChange={this.HandleChange}/>
            )
        })
    
        return(
            <div className="todo-list">   
                {tododata} 
            </div>
        )
    }
}

export default App;