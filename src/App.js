import React, { Component } from 'react';
import './App.css';
import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import Promo from './components/Promo/Promo';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      total: 100,
      pickupSavings: -3.85,
      taxes: 0,
      estTotal: 0,
      disabledPromo: false
    }
  }

  componentDidMount = () => {
    this.setState({
      taxes: (this.state.total + this.state.pickupSavings) * 0.0875
    },
      function() {
        this.setState({
          estTotal:
          this.state.total + this.state.pickupSavings + this.state.taxes
        })
      }
    )
  }
  

  render() {
    return (
      <div className='container'>
         <div className='purchase-card'>
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickupSavings}/>
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr/>
          <EstimatedTotal price={this.state.estTotal.toFixed(2)}/>
          <ItemDetails price={this.state.estTotal}/>
          <hr />
          <Promo 
            giveDiscount={ ()  => this.giveDiscountHandler()}
            isDisabled={this.state.disabledPromo}
          />
         </div>
      </div>
    );
  }
}

export default App;
