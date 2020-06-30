import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'


export default class Header extends Component {
    render() {
        return (
            <Menu>
        <Menu.Item
      
          onClick={this.handleItemClick}
        >
          Editorials
        </Menu.Item>

        <Menu.Item
      
          onClick={this.handleItemClick}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
   
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
        )
    }
}
