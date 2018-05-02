import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store';
import HomeView from './HomeView';

export default class HomeContainer extends React.Component {
    render() {
        return (
            <HomeView/>
        )
    }
}