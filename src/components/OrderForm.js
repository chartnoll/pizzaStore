import React, {PureComponent} from 'react'
import BaseInput from './BaseInput'
import DeliveryInput from './DeliveryInput'
import SauceInput from './SauceInput'
import ToppingsInput from './ToppingsInput'
import OrderSummary from './OrderSummary'

class OrderForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      base: 0,
      sauce: "",
      pineapple: false,
      corn: false,
      olives: false,
      redOnion: false,
      spinach: false,
      tomatoes: false,
      chicken: false,
      delivery: ""
    }

    this.handleBaseChange = this.handleBaseChange.bind(this)
    this.handleSauceChange = this.handleSauceChange.bind(this)
    this.handleDeliveryChange = this.handleDeliveryChange.bind(this)
    this.handleToppingsChange = this.handleToppingsChange.bind(this)
  }

  handleBaseChange(baseInput) {
    if(baseInput === ""){
      alert('You need to select a base!');
      return
    }
    this.setState({base: baseInput});
  }

  handleSauceChange(sauceInput) {
    if(sauceInput === ""){
      alert('You need to select a sauce!');
      return
    }
    this.setState({sauce: sauceInput});
  }

  handleDeliveryChange(deliveryInput) {
    if(deliveryInput === ""){
      alert('You need to select a delivery option!');
      return
    }
    this.setState({delivery: deliveryInput});
  }

  handleToppingsChange(name, value) {
    if(this.noMoreThan3() === 3 && value === true){
      alert('You cannot select more than 3 toppings!');
      return
    }
    this.setState({[name]: value});
  }

  noMoreThan3() {
    const toppings = [
      this.state.pineapple,
      this.state.corn,
      this.state.olives,
      this.state.redOnion,
      this.state.spinach,
      this.state.tomatoes,
      this.state.chicken
    ]
    return toppings.filter( (topping) => topping === true).length
  }

  render() {
    const base = this.state.base
    const sauce = this.state.sauce
    const delivery = this.state.delivery
    const pineapple = this.state.pineapple
    const corn = this.state.corn
    const olives = this.state.olives
    const redOnion = this.state.redOnion
    const spinach = this.state.spinach
    const tomatoes = this.state.tomatoes
    const chicken = this.state.chicken
    const pizzaOrder = {base, sauce, delivery, pineapple, corn, olives, redOnion,
            spinach, tomatoes, chicken}

    return (
      <div>
        <OrderSummary
          pizzaOrder = {pizzaOrder} />
        <BaseInput
          base = {base}
          onBaseChange={this.handleBaseChange} />

        <SauceInput
          sauce = {sauce}
          onSauceChange={this.handleSauceChange} />

        <ToppingsInput
          pineapple = {pineapple}
          corn = {corn}
          olives = {olives}
          redOnion = {redOnion}
          spinach = {spinach}
          tomatoes = {tomatoes}
          chicken = {chicken}
          onToppingsChange={this.handleToppingsChange} />

        <DeliveryInput
          delivery = {delivery}
          onDeliveryChange={this.handleDeliveryChange} />

      </div>
    )
  }
}

export default OrderForm
