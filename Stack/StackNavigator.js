import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import Achievment from '../Screens/Achievment'
import FitScreen from '../Screens/Achievment'
import HomeScreen from '../Screens/HomeScreen'
import MainScreen from '../Screens/MainScreen'
import ParametrScreen from '../Screens/ParametrScreen'
import RestScreen from '../Screens/RestScreen'
import WorkoutScreen from '../Screens/WorkoutScreen'
import FitRestScreen from '../Screens/FitRestScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import ProfileScreen1 from '../Screens/ProfileScreen1'
import PerTrain from '../Screens/PerTrain'
import Nastroiki from '../Screens/Nastroiki'
import Resours from '../Screens/Resours'
import Zapis from '../Screens/Zapis'
import turnir from '../Screens/Sorevnovania'
import HelpChat from '../Screens/HelpChat'
import FullInfo from '../Screens/FullInfo'
import MapTrain from '../Screens/MapTrain'
const StackNavigator = () => {
	const Stack = createNativeStackNavigator()

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: '#24CAD4',
					},
				}}
			>
				<Stack.Screen
					name='Профиль'
					component={ProfileScreen1}
					options={{ headerShown: false, headerTintColor: 'white' }}

				/>
				<Stack.Screen
					name='Спорт и фитнес'
					component={MainScreen}
					options={{ headerShown: true, headerTintColor: 'white' }}
				/>
				<Stack.Screen
					name='Беговая тренировка'
					component={MapTrain}
					options={{ headerShown: true, headerTintColor: 'white' }}
				/>
				<Stack.Screen
					name='Здоровье'
					component={ParametrScreen}
					options={{ headerShown: true, headerTintColor: 'white' }}
				/>
				<Stack.Screen
					name='Персональные тренировки'
					component={PerTrain}
					options={{ headerShown: true, headerTintColor: 'white' }}
				/>
<Stack.Screen
					name='FullInfo'
					component={FullInfo}
					options={{ headerShown: true, headerTintColor: 'white' }}
				/>

        <Stack.Screen
					name='Настройки'
					component={Nastroiki}
					options={{ headerShown: true, headerTintColor: 'white' }}
				/>

        <Stack.Screen
					name='Ресурсы'
					component={Resours}
					options={{ headerShown: true, headerTintColor: 'white' }}
				/>
				<Stack.Screen
					name='Достижения'
					component={Achievment}
					options={{ headerShown: true, headerTintColor: 'white' }}
				/>
				<Stack.Screen
					name='Запись в зал'
					component={Zapis}
					options={{ headerShown: true, headerTintColor: 'white' }}
				/>
         <Stack.Screen
					name='Соревнования'
					component={turnir}
					options={{ headerShown: true, headerTintColor: 'white' }}
				/>
         <Stack.Screen
					name='Чат'
					component={HelpChat}
					options={{ headerShown: true, headerTintColor: 'white' }}
				/>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
					options={{ headerShown: false, headerTintColor: 'white' }}
				/>
				<Stack.Screen
					name='Workout'
					component={WorkoutScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Fit'
					component={FitRestScreen}
					options={{ headerShown: false }}
				/>
				
				
				<Stack.Screen
					name='Rest'
					component={RestScreen}
					options={{ headerShown: false }}
				/>

				
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default StackNavigator

const styles = StyleSheet.create({})
