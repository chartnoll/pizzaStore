import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import BaseInput from './BaseInput'
import DeliveryInput from './DeliveryInput'
import SauceInput from './SauceInput'
import ToppingsInput from './ToppingsInput'

class OrderForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      base: 0,
      sauce: "",
      toppings: [],
      delivery: ""
    }

    this.handleBaseChange = this.handleBaseChange.bind(this);
    this.handleSauceChange = this.handleSauceChange.bind(this);
    this.handleDeliveryChange = this.handleDeliveryChange.bind(this);
    this.handleToppingsChange = this.handleToppingsChange.bind(this);
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

  handleToppingsChange(toppingsInput) {
    this.setState({toppings: toppingsInput});
  }

  render() {
    const base = this.state.base
    const sauce = this.state.sauce
    const delivery = this.state.delivery
    const toppings = this.state.toppings
    console.log(base, sauce, delivery, toppings)
    // console.log(base, sauce, delivery)

    return (
      <div>
        <BaseInput
          base = {base}
          onBaseChange={this.handleBaseChange} />

        <SauceInput
          sauce = {sauce}
          onSauceChange={this.handleSauceChange} />

        <DeliveryInput
          delivery = {delivery}
          onDeliveryChange={this.handleDeliveryChange} />

        <ToppingsInput
          toppings = {toppings}
          onToppingsChange={this.handleToppingsChange} />
      </div>
    )
  }
}

export default OrderForm
