import React, { Component } from 'react'

export default class classcomponents extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            name:"Sachin"
        }
    }
    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>
        {/* <h2>Class Components</h2> */}
        {/* <h2> {this.props.name}--{this.props.course} </h2> */}
        <p> {this.state.count}</p>
        <p> {this.state.name}</p>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}
