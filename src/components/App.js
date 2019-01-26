import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  
  addFish = (fish) => {
    console.log('Adding a fish!');
    // copy the state
    const fishes = {...this.state.fishes};
    // add new fish to the copy of state with date as the uniqe id
    fishes[`fish${Date.now()}`] = fish;
    //set new fish object to the state
    this.setState({
      fishes: fishes
    })
  }

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market'/>
        </div>
        <Inventory addFish={this.addFish} />
        <Order />
      </div>
    )
  }
}

export default App;