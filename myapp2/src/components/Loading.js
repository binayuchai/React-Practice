import React, { Component } from 'react'
import Spinner from '../loading.gif'
export default class Loading extends Component {
  render() {
    return (
      <div>
        <img src={Spinner} alt="Loading" /> 
      </div>
    )
  }
}
