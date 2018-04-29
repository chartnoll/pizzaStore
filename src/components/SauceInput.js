import React, {PureComponent} from 'react'
import { connect } from 'react-redux'

class SauceInput extends PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSauceChange(event.target.value);
  }

  // handleSubmit(event) {
  //   alert("You selected the following base: " + this.state.base);
  //   event.preventDefault();
  // }

  render() {
    const sauce = this.props.sauce
    console.log(sauce)
    return (
      <div className="Sauce" >
     <h2>Pizza Sauce</h2>
     <form className='SelectSauce'>
         <label>
           <h2>Pick your sauce:</h2>
            <select className='SauceSelector'  value={sauce} onChange={this.handleChange}>
             <option value=""> </option>
             <option value="White">White Sauce</option>
             <option value="Red">Red Sauce</option>
             <option value="DoubleRed">Double Red Sauce</option>
             <option value="Mix">Mix It Up</option>

           </select>
         </label>
       </form>

     </div>
    )
  }
}

//onSubmit={this.handleSubmit}
// <input type="submit" value="Submit" />

export default SauceInput
