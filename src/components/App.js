import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  
  addFish = (fish) => {
    console.log('Adding a fish!');
    const fishes = {...this.state.fishes}; // copy the state
    fishes[`fish${Date.now()}`] = fish; // add new fish to the copy of state with date as the uniqe id
    this.setState({ //set new fish object to the state
      fishes: fishes
    })
  }

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({
      order: order
    }) 
  }

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market'/>
          <ul className='fishes'>
            {Object.keys(this.state.fishes).map(key => (
              <Fish 
                key={key}
                index={key} // if you need an index, it must be passed as something other than 'key'
                addToOrder={this.addToOrder}
                details={this.state.fishes[key]}
              />)
            )}
          </ul>
        </div>
        
        <Order 
          fishes={this.state.fishes}
          order={this.state.order}
        />

        <Inventory 
          addFish={this.addFish} 
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App;