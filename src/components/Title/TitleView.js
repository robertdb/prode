import React from 'react';
import styled from 'styled-components';
import {
	Title,
	Subtitle,
	Box
} from './components';
import {Helmet} from "react-helmet";

class TitleView extends React.Component{

	render(){
		return(
			<Box>
				<Title>{this.props.title}</Title>
				<Subtitle>{this.props.subtitle}</Subtitle>
			</Box>
		);
	}
};

export default TitleView;
