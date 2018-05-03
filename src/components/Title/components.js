import React from 'react';
import styled from 'styled-components';
import { extraSmall,mobileSmall,tablet,desktop,desktopLarge } from '../../utils/style-utils';


export const Box = styled.div`
	margin: 0 auto;
	padding: 0px 80px;
	${ tablet.handheld`
		padding: 0px 20px;
	`}
	${ mobileSmall.handheld`
		padding: 0px 12px;
	`}
`;

export const Title = styled.h1`
	text-align: center;
	color: rgb(213, 28, 44);
	${ mobileSmall.handheld`
			font-size:20px;
	`}
`;

export const Subtitle = styled.h3`
	text-align: center;
	color: rgb(196, 196, 196);
	${ mobileSmall.handheld`
			padding:0 20px;
			font-size:16px;
	`}
`;
