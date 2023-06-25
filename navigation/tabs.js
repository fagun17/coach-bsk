import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Image, Settings, StyleSheet, View } from 'react-native'
import Achievment from '../Screens/Achievment'
import HomeScreen from '../Screens/HomeScreen'
import MainScreen from '../Screens/MainScreen'
import ParametrScreen from '../Screens/ParametrScreen'
import PerTrain from '../Screens/PerTrain'
import FullInfo from '../Screens/FullInfo'
import Nastroiki from '../Screens/Nastroiki'
const Tab = createBottomTabNavigator()

const Tabs = () => {
	return (
		<Tab.Navigator screenOptions={{
			headerShown: true,
			headerStyle: {backgroundColor:"#9AC4F8"},
			tabBarStyle: {backgroundColor: "#FAFAFA"},
			

		}}>
			<Tab.Screen
				name='Здоровье'
				component={ParametrScreen}
				options={{
					headerShown: false,
					headerTintColor: 'white',
					tabBarIcon: ({ focused }) => (
						<View>
							<Image
								source={require('../assets/heart-rate.png')}
								resizeMode='contain'
								style={{
									width: 25,
									height: 25,
								}}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name='Настройки'
				component={Nastroiki}
				options={{
					headerShown: true,
					headerTintColor: 'white',
					tabBarIcon: ({ focused }) => (
						<View>
							<Image
								source={require('../assets/cogwheel.png')}
								resizeMode='contain'
								style={{
									width: 25,
									height: 25,
								}}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name='Достижения'
				component={Achievment}
				options={{
					headerShown: false,
					headerTintColor: 'white',
					tabBarIcon: ({ focused }) => (
						<View>
							<Image
								source={require('../assets/winner.png')}
								resizeMode='contain'
								style={{
									width: 30,
									height: 30,
								}}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name='Главная'
				component={MainScreen}
				options={{
					headerShown: true,
					headerTintColor: 'white',
					tabBarIcon: ({ focused }) => (
						<View>
							<Image
								source={require('../assets/home.png')}
								resizeMode='contain'
								style={{
									width: 25,
									height: 25,
								}}
							/>
						</View>
					),
				}}
			/>
			
			<Tab.Screen
				name='Тренинг-программы'
				component={HomeScreen}
				options={{
					headerShown: false,
					headerTintColor: 'white',
					tabBarIcon: ({ focused }) => (
						<View>
							<Image
								source={require('../assets/free-icon-fitness-1995280.png')}
								resizeMode='contain'
								style={{
									width: 25,
									height: 25,
								}}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name='Мои тренировки'
				component={PerTrain}
				options={{
					headerShown: true,
					headerTintColor: 'white',
					tabBarIcon: ({ focused }) => (
						<View>
							<Image
								source={require('../assets/weightlifting.png')}
								resizeMode='contain'
								style={{
									width: 25,
									height: 25,
								}}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name='FullInfo'
				component={FullInfo}
				options={{
					headerShown: true,
					headerTintColor: 'white',
					tabBarIcon: ({ focused }) => (
						<View>
							<Image
								source={require('../assets/full.png')}
								resizeMode='contain'
								style={{
									width: 25,
									height: 25,
								}}
							/>
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	)
}

export default Tabs

const styles = StyleSheet.create({
	shadow: {
		shadowColor: '#24CAD4',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
		elevation: 5,
	},
})
