import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { extraSmall,mobileSmall,tablet,desktop,desktopLarge } from '../../utils/style-utils';
import ResponsiveMenu from 'react-responsive-navbar';
import { Flex, Box } from 'grid-styled';


const Nav = styled.div`
  position: fixed;
  top: 0;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none !important;
  color: #555;
  &:hover {
    color: #869ca6;
  }
`;

const StyledNavLink = (props) => <StyledLink {...props} activeStyle={{color: '#c4dae8'}} >{props.children}</StyledLink>

const StyledALink = styled.a`
  text-decoration: none !important;
  color: #555;
  cursor: pointer;
  &:hover {
    color: #869ca6;
  }
`;


const Button = styled.div`
  height:30px;
  background:white;
  display: block;
  margin-right: 15px;
  margin-top: 20px;
  float:right;
`;

const IconLine = styled.div`
  width: 25px;
  height: 2px;
  margin-bottom: 5px;
  position: relative;
  background: #333;
  border-radius: 3px;
  z-index: 200;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
  opacity 0.55s ease;
`;

const Close = styled.div`
  width: 30px;
  height: 30px;
  margin-top: 20px;
  margin-right: 15px;
  float:right;
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:before, &:after {
    position: absolute;
    content: ' ';
    height: 20px;
    width: 1px;
    background-color: #333;
  }
`;


const List = styled.ul`
	list-style: none;
  margin: 0px;
  padding: 0px;
  text-align: center;
  background-color: #fff;
  border-top: none;
  border-bottom: none;
  clear:right;
`;

const ElementList = styled.li`
  color: #555;
  font-size: 16px;
  padding: 6px 16px;
  display: block;
  font-weight: 300;
`;

const NavStyle = styled.div`

`;

const ButtonOpen = props => {
  return (
    <Button onClick={() => props.onClick() }>
      <IconLine />
      <IconLine />
      <IconLine />
    </Button>
  )
}

const ButtonClose = props => {
  return (
    <Close onClick={() => props.onClick() }/>
  )
}


class NavbarContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      query: ''
    }
  }

  componentDidMount() {

  }

  render() {

    return (
      <NavStyle>
            <ResponsiveMenu
              menuOpenButton={<ButtonOpen onClick={() => this.setState({ menuOpen: true })} />}
              menuCloseButton={<ButtonClose onClick={() => this.setState({ menuOpen: false })} />}
              changeMenuOn={'3000px'}
              smallMenuClassName="small-menu-navbar"
              menu={
                <List>
                  <div>
                    <ElementList>
                      <StyledNavLink to='/prode/1' >JUEGO</StyledNavLink>
                    </ElementList>
                    <ElementList>
                      <StyledNavLink to="/ranking">RANKING</StyledNavLink>
                    </ElementList>
                    <ElementList>
                      <StyledNavLink to="/preguntas" >FAQ</StyledNavLink>
                    </ElementList>
                  </div>
                </List>
              }
            />
      </NavStyle>
  )
  }
}

class NavBar extends React.Component {
  render(){
    return(
        <Nav className="container">
          <div >
            <NavbarContent {...this.props} />
          </div>
        </Nav>
    );
  }
}
const mapStateToProps = store => ({
  profile: store.user.profile
});

export default connect(mapStateToProps)(withRouter(NavBar));
