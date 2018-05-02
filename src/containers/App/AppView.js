import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Ejemplo = props => {
    return (
      <h1>Containers</h1>
    );
}
class App extends Component {
  render() {
		 return (
			<Router >
				<Switch>
			    	<Route exact path="/" component={Ejemplo} />
            <Route path='/prode/:id' component={Ejemplo} />
            <Route path='/prode/:id/ranking/' component={Ejemplo} />
            <Route path="/login" component={Ejemplo} />
        		<Route path="/recuperar" component={Ejemplo} />
        		<Route path="/changePassword" component={Ejemplo} />
        		<Route path="/registro" component={Ejemplo} />
            <Route path="/preguntas" component={Ejemplo} />
		    	</Switch>
			</Router>
		);
	}
}

export default App;
