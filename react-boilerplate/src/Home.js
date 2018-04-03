import React from 'react'
import Header from './Header'

export default class Home extends React.Component{
  state = {
    subtitle:"",
    showButton:true
  }

  componentDidMount(){
    console.log('componentDidMount')
  }

  componentWillUnmount(){
    console.log(`componentWillUnmount`)
    // removeEventListener
  }

  render(){
    console.log('render')
    const customSt = {
      margin: "20px"
    }
    return(
      <div>
        <Header />
        <button style={customSt} class={this.state.showButton?"btn btn-primary":"btn btn-primary hidden"}
          onClick={this.handleClick}> Test </button>
        <input type="text" id="txtval" onChange={this.handleChange} />
        <div id="value">{this.state.subtitle}</div>
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      showButton:false
    })
  }
  handleChange = (e) => {
    this.setState({
      subtitle:e.target.value
    })
  }
}
