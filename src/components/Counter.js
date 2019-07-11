import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
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
      <div style={{marginTop: '30px'}}/>
      <input type='button' className="btn btn-outline-success" onClick={this.onclick.bind(this, 'add')} value='Increase'/>
      &nbsp;
      <input type='button' className="btn btn-outline-success" onClick={this.onclick.bind(this, 'sub')} value='Decrease'/>
    </div>
   )
 }
}
