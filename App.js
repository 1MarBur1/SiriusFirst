import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const App = () =>{
  return (
    <View>
		  <Image style={styles.image}
			  source={{ uri: 'https://www.jingu.ru/sirius/jingu-logo-512.png' }}
		  />
		<Text style = {styles.text}>Пивко Артем</Text>
		
		  <Image style={styles.emoji}
			  source={{ uri: 'https://img.icons8.com/emoji/452/fire.png' }}
		  />
	</View>
  );
};

const styles = StyleSheet.create({
	text: {
		fontSize: 40,
		fontFamily: 'Roboto',
		color: '#000000',
		alignSelf: 'center',
		marginTop: 86,
	},
	image: {
		width: 210,
		height: 210,
		marginTop: 121,
		alignSelf: 'center',
		borderRadius: 105,
	},
	emoji: {
		width: 80,
		height: 80,
		marginTop: 87,
		alignSelf: 'center',
	}
});

export default App;
