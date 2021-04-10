import React from 'react';
import TodoItem from './TodoItem'
class Todos extends React.Component{

  render(){

   return this.props.todos.map((todo)=>{
    		return(<TodoItem key={todo.id} todo={todo} 
    			delTodo={this.props.delTodo}
    			/>)
    	}) 
    	
  }
 
}
export default Todos;