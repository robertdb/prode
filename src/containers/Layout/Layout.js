import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/NavBar';

const Container = styled.div`
    background-color: white;
`;

const Content = styled.div`
    padding-top:60px;
`
const Layout = (props) => (

    <Container className="container">
      <Helmet defaultTitle="Honda - Prode Mundial" titleTemplate="%s | Honda" >
        <meta name="description" content="Nested component" />
      </Helmet>
      <Navbar/>
      <Content>
          {props.children}
      </Content>
    </Container>
)
export default Layout;
