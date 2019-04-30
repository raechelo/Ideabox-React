import React, { Component } from 'react';
import './App.css';
import IdeaForm from './ideaForm';
import IdeaContainer from './ideaContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    const newIdea = {...idea, id: Date.now()}
    const ideas = [...this.state.ideas, newIdea]
    this.setState({ideas})
  }

  removeIdea = (id) => {
    const ideas = this.state.ideas.filter(i => i.id !== id);
    this.setState({ideas})
  }

  render () {
    return (
      <div className="App">
       <h1>Ideabox</h1>
       <IdeaForm addIdea={this.addIdea}/>
       <IdeaContainer removeIdea={this.removeIdea} idea={this.state.ideas} />
      </div>
    );
    }

}

export default App;
