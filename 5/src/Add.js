import React from 'react'

class Add extends React.Component{
	state={
		title:''
	}
	handleChange=(e)=>{
		this.setState({[e.target.name]:e.target.value})
	}
	handleSubmit=(e)=>{
		e.preventDefault()
		this.props.addTodo(this.state.title)
		this.setState({title:''})
	}

	render(){

		return(
			<form onSubmit={this.handleSubmit} style={{display:"flex"}}>
				<input type="text"
				 name="title" 
				 style={{flex:'10', padding: '5px'}}
				 placeholder="Add Your Task...."
				 value={this.state.title}Change
				 onChange={this.handleChange}
				 required
				 />
				 <input type="submit"
				  value="ADD"
				  className="btn"
				  style={{flex:"1"}}
				  />
			</form>
			)
	}
}

export default Add