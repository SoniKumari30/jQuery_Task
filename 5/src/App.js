import React from 'react'
import Todos from './Todos'
import Add from './Add'
import {v4} from 'uuid'


class App extends React.Component{
  state={
       todos:[
            
        ]
      }
    
      markComplete =(id)=>{
        this.setState({todos:this.state.todos.map(todo =>{
          if(todo.id===id){
            todo.completed=!todo.completed
          }
          return todo;
        })
      })
      }
      
      delTodo =(id)=>{
        this.setState({todos:[...this.state.todos.filter(todo=> todo.id !==id)]})
      }
      
      addTodo=(title)=>{
          const newTodo={
            id:v4(),
            title,
            completed:false
          }
          this.setState({todos: [...this.state.todos, newTodo]});
      }
  render(){
   return (
    <div className="App">
    <div className="container">
          
            <div>
                 <Add  addTodo={this.addTodo}/>
               <Todos  todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </div>
            
         
    </div>
    </div>
  );  
  }
 
}

export default App