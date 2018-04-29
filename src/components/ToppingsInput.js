import React, {PureComponent} from 'react'

class ToppingsInput extends PureComponent {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target
    let value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.props.onToppingsChange(name, value)
  }

  render() {

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

export default ToppingsInput
