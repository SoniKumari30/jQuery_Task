import React from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

class App extends React.Component{

      //delete todo
      delTodo =(id)=>{
        this.setState({todos:[...this.state.todos.filter(todo=> todo.id !==id)]})
      }
      //add Todo
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
          <Header />
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