import React from 'react';
import PropTypes from 'prop-types'

class TodoItem extends React.Component{
  getStyle=()=>{
    return{
        background:'#f4f4f4',
        padding:'10px',
        borderBottom:'1px #ccc dotted',
      textDecoration: this.props.todo.completed? 'line-through':'none'
  }
}
// markComplete=(e)=>{
//   e.preventDefault()
//   console.log(this.props)
// }


  render(){
    const {id, title}=this.props.todo;
   return (
    <div style={this.getStyle()}>
      <p><input type='checkbox'  onChange={this.props.markComplete.bind(this, id)}/>{" "}
      {title}
      <button onClick={this.props.delTodo.bind(this,id)}>delete</button>
      </p>
    </div>
    	)
  }
 
}

export default TodoItem;