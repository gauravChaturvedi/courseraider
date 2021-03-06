import React from "react";
import { Nav, NavItem, Glyphicon } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";

// Menu component
export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    // default ui local state
    this.state = {
      showSubMenu: false,
      showCreateQuizOptions: false
    };

    // bind <this> to the event method
    this.toggleSubMenu = this.toggleSubMenu.bind(this);
  }

  // render
  render() {
    return (
      <Nav bsStyle="pills" stacked>
        <IndexLinkContainer to="/">
          <NavItem>
            Dashboard
          </NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/create-form">
          <NavItem>
            Create Form
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/view-forms">
          <NavItem>
            View Forms
          </NavItem>
        </LinkContainer>
      </Nav>
    );
  }



  toggleSubMenu(navItem) {
    this.setState({
      showSubMenu: !this.state.showSubMenu,
      showCreateQuizOptions: !this.state.showCreateQuizOptions
    });
  }


}


// <NavItem onClick={this.toggleSubMenu}>
//   <NavItem>
//     This is an item <Glyphicon glyph="plus-sign"/>
//   </NavItem>
//   {
//     this.state.showCreateQuizOptions &&
//     <LinkContainer to="/user-edit">
//       <NavItem>
//         Add User
//       </NavItem>
//     </LinkContainer>
//   }
// </NavItem>
// <LinkContainer to="/class">
//   <NavItem>
//     Class Details
//   </NavItem>
// </LinkContainer>
