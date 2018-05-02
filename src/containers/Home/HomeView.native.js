import React from 'react';
import { View, ScrollView, Dimensions, Button } from 'react-native';

import styles from '../../native/styles';

import SearchBar from '../../components/SearchBar';
import SectionTiposRenta from '../../components/SectionTiposRenta';
import SectionPortfolios from '../../components/SectionPortfolios';

export default () =>
  <View>  	
    <SearchBar />
    <ScrollView style={styles.homeScrollView}>
    	<SectionTiposRenta />    	
    	<SectionPortfolios />
    	<View style={{margin: 16}}>
    		<Button title="INGRESAR" onPress={() => alert('login')}/>
    	</View>    	
   	</ScrollView>     
  </View>;   