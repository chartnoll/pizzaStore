import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import BaseInput from './BaseInput'
// import DeliveryInput from './DeliveryInput'
// import SauceInput from './SauceInput'
// import ToppingsInput from './ToppingsInput'

class OrderForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      base: 0,
      sauce: "",
      toppings: [],
      delivery: false
    }

    this.handleBaseChange = this.handleBaseChange.bind(this);
    this.handleSauceChange = this.handleSauceChange.bind(this);
    this.handleDeliveryChange = this.handleDeliveryChange.bind(this);
  }

  handleBaseChange(baseInput) {
    this.setState({base: baseInput});
  }

  handleSauceChange(sauceInput) {
    this.setState({sauce: sauceInput});
  }

  handleDeliveryChange(deliveryInput) {
    this.setState({delivery: deliveryInput});
  }

  render() {
    const base = this.state.base
    // const sauce = this.state.sauce
    // const delivery = this.state.delivery
    // const toppings = this.state.toppings
    //console.log(base, sauce, delivery, toppings)
    console.log(base)

    return (
      <div>
        <BaseInput
          base = {base}
          onBaseChange={this.handleBaseChange} />
      </div>
    )
  }
}

export default OrderForm
