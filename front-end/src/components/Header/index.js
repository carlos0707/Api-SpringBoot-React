import React from 'react';
import ImageLogo from '../../images/cropped-logo_nav_tam-4.png'

import { Container } from './styles';

class Header extends React.Component {

  render() {
    return (
      <Container>
        <a href="http://www.rav.eti.br/" target="_blank"><img src={ImageLogo} /></a>
      </Container>
    );
  }

}

export default Header
