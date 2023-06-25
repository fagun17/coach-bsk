import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header () {
	return (
		<View style={styles.main}>
			<Text style={styles.text}>Главная</Text>
		</View>
	)
}


const styles = StyleSheet.create({
	main: {
		paddingTop: 10,
		height: 50,
		backgroundColor:'#24cad2'
		
	},
	text: {
		fontSize: 24,
		color: '#FFFF',
		paddingLeft: 20,
		
	

	}
		

	
})