
import { Component } from 'react';
import CoffeHouseSection from '../coffee-house-page/coffe-house-section/coffe-house-section';
import OurCoffeeSection from '../our-coffee-page/our-coffee-section/our-coffee-section';
import OurCoffeeItemSection from '../our-coffee-item-page/our-coffee-item-section';
import PleasureSection from '../pleasure-page/pleasure-page-section/pleasure-section';

import './app.scss';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      itemData: {
        country: 'Brazil',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 16.99
      }
    }
  }

  importAll = (r) => {
    return r.keys().map(r);
  }

  render(){

    const { itemData } = this.state;

    return (
      <div className='app'>
        <CoffeHouseSection importImages={this.importAll}/>

        <OurCoffeeSection importImages={this.importAll(require.context('../../images/coffee-house/our-best/', false, /\.(png|jpe?g|svg)$/))}/>

        <OurCoffeeItemSection data={itemData}/>
        
        <PleasureSection importImages={this.importAll(require.context('../../images/pleasure/', false, /\.(png|jpe?g|svg)$/))}/>
      </div>
    );
  }
}

export default App;