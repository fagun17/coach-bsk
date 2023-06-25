import { StyleSheet, Text, View } from 'react-native'
import React, {Component} from 'react'
import MapView from 'react-native-maps'
const MapTrain = () => {
	return (
		<View style = {styles.container}>
			<MapView style = {StyleSheet.absoluteFill}
			initialRegion={{
				latitude: 37.788825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421
			}}/>
		</View>
	)
}

export default MapTrain

const styles = StyleSheet.create({
	container: {
		flex: 1,
		
	}
})