import React, {PureComponent} from 'react'
import { connect } from 'react-redux'

class Base extends PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onBaseChange(event.target.value);
  }

  // handleSubmit(event) {
  //   alert("You selected the following base: " + this.state.base);
  //   event.preventDefault();
  // }

  render() {
    const base = this.props.base
    console.log(base)
    return (
      <div className="Base" >
     <h2>Pizza Base</h2>
     <form className='SelectBase'>
         <label>
           <h2>Pick your base size:</h2>
            <select className='BaseSelector'  value={base} onChange={this.handleChange}>
             <option value="20">20 cm</option>
             <option value="25">25 cm</option>
             <option value="30">30 cm</option>
             <option value="35">35 cm</option>

           </select>
         </label>
       </form>

     </div>
    )
  }
}

//onSubmit={this.handleSubmit}
// <input type="submit" value="Submit" />

export default Base
