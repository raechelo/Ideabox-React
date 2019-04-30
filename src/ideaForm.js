import React, { Component } from 'react';

class IdeaForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: ''
    }
    // this.handleChange = this.handleChange.bind(this);
    // ^^^ this is es5 way of binding, will likely see in legacy codebases
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addIdea(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="idea title" 
          onChange={this.handleChange}
          value={this.state.title}
          name='title'
          />
        <input 
          type="text" 
          placeholder="idea body" 
          onChange={this.handleChange}
          value={this.state.body}
          name='body'
          />
        <input 
          type="submit" 
          value="submit" 
          />
      </form>
    )
  }
}


export default IdeaForm;