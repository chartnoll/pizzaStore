import React, {PureComponent} from 'react'
import { connect } from 'react-redux'

class DeliveryInput extends PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onDeliveryChange(event.target.value);
  }

  // handleSubmit(event) {
  //   alert("You selected the following base: " + this.state.base);
  //   event.preventDefault();
  // }

  render() {
    const delivery = this.props.delivery
    console.log(delivery)
    return (
      <div className="Delivery" >
     <h2>Drone Delivery Option</h2>
     <form className='SelectDelivery'>
         <label>
           <h2>Would you like drone delivery:</h2>
            <select className='DeliverySelector'  value={delivery} onChange={this.handleChange}>
             <option value="drone">Drone Delivery</option>
             <option value="normal">Normal Delivery</option>

           </select>
         </label>
       </form>

     </div>
    )
  }
}

//onSubmit={this.handleSubmit}
// <input type="submit" value="Submit" />

export default DeliveryInput
