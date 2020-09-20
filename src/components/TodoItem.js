import React from "react";


class TodoItem extends React.Component{
    constructor(props){
        super()
    }
    render(){

        const completed_styles = {
            textDecoration: 'line-through',
            color:'green',
            fontStyle: "italic",
        }
        return(
            <div className="todo-item">
                <input type="checkbox" 
                checked ={this.props.item.completed}
                onChange={() => this.props.HandleChange(this.props.item.id)}
                /><br/>
    
                <span style={
                    this.props.item.completed 
                    ? completed_styles 
                    : null
                }> {this.props.item.task} </span>
            </div>
        )
    }
}

export default TodoItem