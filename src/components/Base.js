import React, {PureComponent} from 'react'
import { connect } from 'react-redux'

class Base extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {base: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({base: event.target.base});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Base" >
     <h2>Pizza Base</h2>
     <form className='SelectBase' onSubmit={this.handleSubmit}>
         <label>
           <h2>Pick your base size:</h2>
            <select className='BaseSelector'  value={this.state.base} onChange={this.handleChange}>
             <option base="20">20</option>
             <option base="25">25</option>
             <option base="30">30</option>
             <option base="35">35</option>

           </select>
         </label>
         <input type="submit" value="Submit" />
       </form>

     </div>
    )
  }
}

export default Base
