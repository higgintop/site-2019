import React, { Component } from 'react';
import BackgroundImage from '../Assets/Images/ah-54.jpg'
import { HeaderWrap, Overlay } from './Header.styled'

class Header extends Component {
  render() {
    return (
      <HeaderWrap imageurl={BackgroundImage}>
      </HeaderWrap>
    );
  }
}

export default Header;
