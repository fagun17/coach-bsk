import { View, Text, StyleSheet, Image, Modal } from 'react-native'
import React from 'react'

export default function FullInfo  ({route}) {
	const LoadScene = () => {
		NavigationPreloadManager.goBack()
	}
	return (
		<View>
			<Image source={{ uri: route.params.img}}
							style={{
								width: '100%',
								height: 200,
								borderRadius: 50,
								marginTop: 20
								
							}}
						/>
						<Text style={styles.title}>ОПИСАНИЕ СОЗДАННОГО УПРАЖНЕНИЯ</Text>
			<Text style={styles.title}>{route.params.name}</Text>
			<Text style = {styles.full}>{route.params.full}</Text>
			
		</View>
	)
}

const styles = StyleSheet.create({
	full: {
		fontSize: 20,
			textAlign: 'center',
			marginTop: 20,
      color: '#f55151'
	},
	title: {
		fontSize: 25,
		textAlign: 'center',
		marginTop: 10,
		color: '#474747',
		marginTop: 25
	},
})