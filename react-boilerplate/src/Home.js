import React from 'react'

export default class Home extends React.Component{ // class components: statefull

  state = {
    title: "My Other Title",
    hidden: false
  }

  render(){
    console.log(this.state.title)
    return(
      <div>
        <ListItem title={this.state.title} />
        <button type="button" onClick={ this.changeTitle }><i class="fa fa-home"></i>&nbsp;Click</button>
      </div>
    )
  }

  changeTitle = () => this.setState( {title:"New Title"} )
}

const ListItem = (props) => { // functional comp: stateless | dumb
  return <li onClick={props.click}>{props.title}</li>
}
