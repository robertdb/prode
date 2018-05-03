import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store';
import ProdeView from './ProdeView';
export default class ProdeContainer extends React.Component {
    render() {
        return (
            <ProdeView />
        )
    }
}
