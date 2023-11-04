import React, { Component } from 'react'
import Spinner from '../Spinner-1s-82px.gif'
export default class Loading extends Component {
  render() {
    return (
      <div>
        <img src={Spinner} alt="Loading" /> 
      </div>
    )
  }
}
