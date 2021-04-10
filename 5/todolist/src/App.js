import React from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'


class App extends React.Component{
  state={
       todos:[
        

        ]
      }
      //toggle todo
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
                 <AddTodo  addTodo={this.addTodo}/>
               <Todos  todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </div>
            
         
    </div>
    </div>
  );  
  }
 
}

export default App;