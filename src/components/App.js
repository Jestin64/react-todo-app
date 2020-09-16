import React from "react";
// import Header from "./Header.js"
// import Main from "./Main.js";
// import Footer from "./Footer.js";

// import TodoItem from "./TodoItem.js";
import todolistdata from "../todolistdata";
import "../style.css";
import TodoItem from "./TodoItem";


function App(){
    const tododata = todolistdata.map((item) =>{
        return(
            <TodoItem key={item.id}
            item = {item}
            />
        )
    })

    return(
        <div className="todo-list">   
            {tododata}

           {/* <TodoItem task="MMR" name="yee"/>
           <TodoItem task="Phase 2 and phase 3"/>
           <TodoItem task="next lesson in genki with podcasts"/>
           <TodoItem task ="20 push ups..."/> */}
            {/* <Header/>
            <Main/>
            <Footer/> */}
        </div>
    )
}

export default App;