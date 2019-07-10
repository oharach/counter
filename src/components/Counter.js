import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  componentWillReceiveProps(props) {
    this.setState({count: parseInt(props.initialCount)});
  }
  onclick(type){
    this.setState(prevState => {
       return {count: type == 'add' ? prevState.count + 1: prevState.count - 1}
    });
  }

 render() {
  return (
    <div>
      Count: {this.state.count}
      <br/>
      <div style={{marginTop: '50px'}}/>
      <input type='button' onClick={this.onclick.bind(this, 'add')} value='Increase'/>
      <input type='button' onClick={this.onclick.bind(this, 'sub')} value='Decrease'/>
     </div>
   )
 }
}
