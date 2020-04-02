import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  componentDidMount() {
    this.getPets()
  }


  getPets = () => {
    fetch(`/api/pets`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        pets: data
      });
    })
  }
  

  onChangeType = () => {
    //update type in state
    //type from Filter now equals type in this.state
  }

  onAdopt = (id) => {
    console.log(id)
    this.setState(prevState => {
      //find the pet to update
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser getPets={this.state.pets} adopt={this.onAdopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
