import React from 'react';
import Layout from '../../containers/Layout/Layout';
import Slider from '../../components/Slider/Slider';
import SectionTiposRenta from '../../components/SectionTiposRenta';
import SectionPortfolios from '../../components/SectionPortfolios';
import SectionRanking from '../../components/SectionRanking';
import SectionDatos from '../../components/SectionDatos';
import CarouselAsociadas from '../../components/CarouselAsociadas';
import { GraficoRendimiento } from '../../components/Graficos';
import {Helmet} from "react-helmet";

class Home extends React.Component{
  constructor(props) {
    super()
    this.state = {
      buscadorContainer: null
    }
  }

  componentDidMount() {
    this.setState({ buscadorContainer: this.refs.buscadorContainer });
  }

  render() {
    const defaultImage = window.location.origin + '/public/images/banner_2.png';
    return (
      <div className="container-custom" style={{backgroundColor:'#f8f8f8'}}>
        <Layout>
          <Helmet defaultTitle="CAFCI - Buscador de Fondos" titleTemplate="%s | CAFCI" >
            <meta property="og:image" content={defaultImage} />
          </Helmet>
          <Slider buscadorContainer={this.state.buscadorContainer}/>
          <SectionDatos />  
          <CarouselAsociadas/>
          <SectionTiposRenta ref="buscadorContainer"/>
          <SectionPortfolios />
          <SectionRanking />
        </Layout>
      </div>
    )
  }
}

export default Home;