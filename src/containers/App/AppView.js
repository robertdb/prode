import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserProfile } from '../../actions/user-actions';
import logo from './logo.svg';
import HomeView from '../Home';
import FaqView from '../Faq';
import ProdeView from '../Prode';

const Ejemplo = props => {
    return (
      <div>
        <h1>Containers</h1>
      </div>
    );
}
class App extends Component {

  render() {
		 return (
  			<Router >
  				<Switch>
  			    	<Route exact path="/" component={HomeView} />
              <Route path='/prode/:id' component={ProdeView} />
              <Route path='/prode/:id/ranking/' component={Ejemplo} />
              <Route path="/login" component={Ejemplo} />
          		<Route path="/recuperar" component={Ejemplo} />
          		<Route path="/changePassword" component={Ejemplo} />
          		<Route path="/registro" component={Ejemplo} />
              <Route path="/preguntas" component={FaqView} />
  		    	</Switch>
  			</Router>
		);
	}
}

const mapStateToProps = store => ({
	profile: store.user.profile
});

export default connect(mapStateToProps)(App);
