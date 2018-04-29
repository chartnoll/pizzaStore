import React, {PureComponent} from 'react'
import { connect } from 'react-redux'

class ToppingsInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      toping1: true,
      toping2: true
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    //this.props.onToppingsChange(event.target.value);
  }

  // handleSubmit(event) {
  //   alert("You selected the following base: " + this.state.base);
  //   event.preventDefault();
  // }

  render() {
    const toppings = this.props.toppings
    console.log(toppings)
    return (
      <div className="Toppings" >
     <h2>Chose your toppings</h2>
     <form>
        <label>
          Is going:
          <input
            name="toping1"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleChange} />
          <input
            name="toping2"
            type="checkbox"
            checked={this.state.isGoing}
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
