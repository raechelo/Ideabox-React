import React from 'react';
import Card from './Card'

const IdeaContainer = ({idea, removeIdea}) => {

  const displayIdeas = idea.map(idea => {
    return (
     <Card {...idea} key={idea.id} removeIdea={removeIdea} />
    )
    })

  return (
    <div>
      {displayIdeas}
    </div>
  )
}

export default IdeaContainer;