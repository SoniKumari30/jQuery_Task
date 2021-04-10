import React from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

class App extends React.Component{

      //delete todo
      delTodo =(title)=>{
        this.setState({todos:[...this.state.todos.filter(todo=> todo.title !==title)]})
      }
      //add Todo
      addTodo=(title)=>{
          const newTodo={
            title,
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
                 <Todos delTodo={this.delTodo}/>
            </div>
            
         
    </div>
    </div>
  );  
  }
 
}

export default App;