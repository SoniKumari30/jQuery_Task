import React from 'react';
import PropTypes from 'prop-types'

class TodoItem extends React.Component{
  getStyle=()=>{
    return{
        background:'#f4f4f4',
        padding:'10px',
        borderBottom:'1px #ccc dotted',
    
  }
}




  render(){
    const {id, title}=this.props.todo;
   return (
    <div style={this.getStyle()}>
    </div>
    	)
  }
 
}
TodoItem.propTypes={
  todo: PropTypes.object.isRequired
}
const btnStyle={
  background:'#ff0000',
  color:'#fff',
  border:'none',
  padding:'5px 8px',
  borderRadius:'50%',
  cursor:'pointer',
  float:'right'
}

export default TodoItem;