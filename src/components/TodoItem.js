import React from "react";


class TodoItem extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div className="todo-item">
                <input type="checkbox" 
                checked ={this.props.item.completed}
                onChange={() => this.props.HandleChange(this.props.item.id)}
                /><br/>
    
                <span style={
                    this.props.item.completed ? {textDecoration: 'line-through', color:'green'} : {textDecoration: 'none'}
                }>{this.props.item.task} </span>
            </div>
        )
    }
}

export default TodoItem