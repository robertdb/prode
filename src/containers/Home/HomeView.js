import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../actions/user-actions';
import Layout from '../../containers/Layout/Layout';
import Title from '../../components/Title';

class Home extends React.Component{
  constructor(props) {
    super()
    this.state = {

    }
  }

  componentDidMount() {
      this.props.dispatch(getUserProfile());
  }

  render() {

    return (
      <Layout>
          <Title
            title={'Participá del Prode Mundial y pronosticá resultados.'}
            subtitle={'Cuanto más aciertes, más puntos ganas.'}
          />
      </Layout>
    )
  }
}

const mapStateToProps = store => ({
	profile: store.user.profile
});

export default connect(mapStateToProps)(Home);
