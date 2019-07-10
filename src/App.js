import React, { Component } from 'react'
import Counter from './components/Counter'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {initialCount: 10};
  }
  
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.initCounter.value;
    this.setState({initialCount: newItemValue});
    
    if(newItemValue) {
      this.refs.form.reset();
    }
  }

  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit.bind(this)} className="form-inline">
        <input type="number" ref="initCounter" defaultValue={this.state.initialCount} />
        <button type="submit">Submit</button>
        <Counter initialCount={this.state.initialCount} />
      </form>
    )
  }
}
