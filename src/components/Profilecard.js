import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
export default class Profilecard extends Component {


  constructor(props)
  {
   

    super(props);

    this.state={
      image:'https://react.semantic-ui.com/images/avatar/large/matthew.png',
      name:'Matthew'
    }
  }



  componentDidUpdate(prevProps, prevState)
  {
    console.log(this.props);


    if (prevProps.userdata !== this.props.userdata) {
      this.setState({
        image:this.props.userdata.owner.avatar_url,
        name:this.props.userdata.full_name,
      })
  }
    
  }
  


    render() {
        return (
            <Card>
    <Image src={this.state.image} wrapped ui={false} />
    <Card.Content>
        <Card.Header>{this.state.name}</Card.Header>
  
   
    </Card.Content>
   
  </Card>
        )
    }
}
