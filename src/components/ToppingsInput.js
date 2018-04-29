import React, {PureComponent} from 'react'
import { connect } from 'react-redux'

class ToppingsInput extends PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    //console.log(target, value, name)
    //value = target.type === 'checkbox' ? target.checked : target.value;
    //console.log(target, value, name)
    this.props.onToppingsChange(name, value)
    /*this.setState({
      [name]: value
    });*/
    //this.props.onToppingsChange(event.target.value);
  }

  // handleSubmit(event) {
  //   alert("You selected the following base: " + this.state.base);
  //   event.preventDefault();
  // }

  render() {
    //const toppings = this.props.toppings
    const pineapple = this.props.pineapple
    const corn = this.props.corn
    const olives = this.props.olives
    const redOnion = this.props.redOnion
    const spinach = this.props.spinach
    const tomatoes = this.props.tomatoes
    const chicken = this.props.chicken

    //console.log(toppings)
    return (
      <div className="Toppings" >
     <h2>Chose your toppings</h2>
     <form>
        <label>
          Pineapple:
          <input
            name="pineapple"
            type="checkbox"
            checked={this.props.pineapple}
            onChange={this.handleChange} />
        </label><br />
        <label>
          Corn:
          <input
            name="corn"
            type="checkbox"
            checked={this.props.corn}
            onChange={this.handleChange} />
        </label><br />
        <label>
          Olives:
          <input
            name="olives"
            type="checkbox"
            checked={this.props.olives}
            onChange={this.handleChange} />
        </label><br />
        <label>
          Red Onion:
          <input
            name="redOnion"
            type="checkbox"
            checked={this.props.redOnion}
            onChange={this.handleChange} />
        </label><br />
        <label>
          Spinach:
          <input
            name="spinach"
            type="checkbox"
            checked={this.props.spinach}
            onChange={this.handleChange} />
        </label><br />
        <label>
          Tomatoes:
          <input
            name="tomatoes"
            type="checkbox"
            checked={this.props.tomatoes}
            onChange={this.handleChange} />
        </label><br />
        <label>
          Chicken:
          <input
            name="chicken"
            type="checkbox"
            checked={this.props.chicken}
            onChange={this.handleChange} />
        </label>
      </form>

     </div>
    )
  }
}

//onSubmit={this.handleSubmit}
// <input type="submit" value="Submit" />

export default ToppingsInput
