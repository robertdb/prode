import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../actions/user-actions';
import Layout from '../../containers/Layout/Layout';


const Title = (props) => {
    return (
      <h1>Preguntas</h1>
    );
}

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
          <Title/>
      </Layout>
    )
  }
}

const mapStateToProps = store => ({
	profile: store.user.profile
});

export default connect(mapStateToProps)(Home);
