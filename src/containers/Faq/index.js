import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store';
import FaqView from './FaqView';
export default class FaqContainer extends React.Component {
    render() {
        return (
            <FaqView />
        )
    }
}
