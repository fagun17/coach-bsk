import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
// menu
import burger from '../assets/burger.png'
// photo
import alexis2 from '../assets/alexis2.png'
// png
import sport from '../assets/sport.png'
import winner from '../assets/winner.png'
import heart from '../assets/heart-rate.png'
import cogwheel from '../assets/cogwheel.png'
import weightlifting from '../assets/weightlifting.png'
import resours from '../assets/resours.png'
import sportzall from '../assets/sportzall.png'
import turnir from '../assets/turnir.png'
import chat from '../assets/chat.png'
// navigation
import { useNavigation } from '@react-navigation/native'
const ProfileScreen1 = ({}) => {
	const navigation = useNavigation()
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={burger}
				style={{
					width: 20,
					height: 20,
					tintColor: 'black',
					marginTop: 20,
					paddingHorizontal: 10,
					paddingLeft: 15,
				}}
			></Image>

			<Image
				source={alexis2}
				style={{
					width: '100%',
					height: 300,
					borderRadius: 15,
					marginTop: 10,
				}}
			></Image>
			<Text
				style={{
					fontSize: 20,
					fontWeight: 'bold',
					paddingTop: 5,
					paddingBottom: 5,
					paddingLeft: 10
				}}
			>
				Сапунов Александр
			</Text>
			<Text style={{paddingLeft: 10}}>Должность: разработчик, программист, инженер АСУ ТП</Text>
			<Text style={{ fontSize: 15, fontWeight: 'bold', paddingTop: 15, paddingLeft: 10 }}>
				{' '}
				БАЛЛЫ: 125
			</Text>


       <TouchableOpacity  onPress={() => {
						navigation.navigate('Спорт и фитнес')
					}}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingLeft: 120,
					paddingRight: 50,
					paddingHorizontal: 8,
					backgroundColor: 'white',
					borderRadius: 10
					
				}}
			>
				<Image
					source={sport}
					style={{ width: 25, height: 25, marginTop: 5 }}
				></Image>
				<Text
					style={{
						fontSize: 15,
						fontWeight: 'bold',
						paddingLeft: 15,
						color: '#24CAD4',
					}}
				>
					Спорт и фитнес
				</Text>
			</View>
			</TouchableOpacity>



			<TouchableOpacity  onPress={() => {
						navigation.navigate('Достижения')
					}}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingLeft: 120,
					paddingRight: 50,
					paddingHorizontal: 8,
					backgroundColor: 'white',
					borderRadius: 10,
					marginTop: 10
					
				}}
			>
				<Image
					source={winner}
					style={{ width: 25, height: 25, marginTop: 5 }}
				></Image>
				<Text
					style={{
						fontSize: 15,
						fontWeight: 'bold',
						paddingLeft: 15,
						color: '#24CAD4',
					}}
				>
					Достижения
				</Text>
			</View>
			</TouchableOpacity>




			<TouchableOpacity  onPress={() => {
						navigation.navigate('Здоровье')
					}}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingLeft: 120,
					paddingRight: 50,
					paddingHorizontal: 8,
					backgroundColor: 'white',
					borderRadius: 10,
					marginTop: 10
					
				}}
			>
				<Image
					source={heart}
					style={{ width: 25, height: 25, marginTop: 5 }}
				></Image>
				<Text
					style={{
						fontSize: 15,
						fontWeight: 'bold',
						paddingLeft: 15,
						color: '#24CAD4',
					}}
				>
					Здоровье
				</Text>
			</View>
			</TouchableOpacity>


			<TouchableOpacity  onPress={() => {
						navigation.navigate('Персональные тренировки')
					}}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingLeft: 120,
					paddingRight: 50,
					paddingHorizontal: 8,
					backgroundColor: 'white',
					borderRadius: 10,
					marginTop: 10
					
				}}
			>
				<Image
					source={weightlifting}
					style={{ width: 25, height: 25, marginTop: 5 }}
				></Image>
				<Text
					style={{
						fontSize: 15,
						fontWeight: 'bold',
						paddingLeft: 15,
						color: '#24CAD4',
					}}
				>
					Персональные тренировки
				</Text>
			</View>
			</TouchableOpacity>


			<TouchableOpacity  onPress={() => {
						navigation.navigate('Настройки')
					}}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingLeft: 120,
					paddingRight: 50,
					paddingHorizontal: 8,
					backgroundColor: 'white',
					borderRadius: 10,
					marginTop: 10
					
				}}
			>
				<Image
					source={cogwheel}
					style={{ width: 25, height: 25, marginTop: 5 }}
				></Image>
				<Text
					style={{
						fontSize: 15,
						fontWeight: 'bold',
						paddingLeft: 15,
						color: '#24CAD4',
					}}
				>
					Настройки
				</Text>
			</View>
			</TouchableOpacity>



			<TouchableOpacity  onPress={() => {
						navigation.navigate('Ресурсы')
					}}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingLeft: 120,
					paddingRight: 50,
					paddingHorizontal: 8,
					backgroundColor: 'white',
					borderRadius: 10,
					marginTop: 10
					
				}}
			>
				<Image
					source={resours}
					style={{ width: 25, height: 25, marginTop: 5 }}
				></Image>
				<Text
					style={{
						fontSize: 15,
						fontWeight: 'bold',
						paddingLeft: 15,
						color: '#24CAD4',
					}}
				>
					Ресурсы
				</Text>
			</View>
			</TouchableOpacity>




			<TouchableOpacity  onPress={() => {
						navigation.navigate('Запись в зал')
					}}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingLeft: 120,
					paddingRight: 50,
					paddingHorizontal: 8,
					backgroundColor: 'white',
					borderRadius: 10,
					marginTop: 10
					
				}}
			>
				<Image
					source={sportzall}
					style={{ width: 25, height: 25, marginTop: 5 }}
				></Image>
				<Text
					style={{
						fontSize: 15,
						fontWeight: 'bold',
						paddingLeft: 15,
						color: '#24CAD4',
					}}
				>
					Запись в зал
				</Text>
			</View>
			</TouchableOpacity>




			<TouchableOpacity  onPress={() => {
						navigation.navigate('Соревнования')
					}}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingLeft: 120,
					paddingRight: 50,
					paddingHorizontal: 10,
					backgroundColor: 'white',
					borderRadius: 10,
					marginTop: 10
					
				}}
			>
				<Image
					source={turnir}
					style={{ width: 25, height: 25, marginTop: 0 }}
				></Image>
				<Text
					style={{
						fontSize: 15,
						fontWeight: 'bold',
						paddingLeft: 15,
						color: '#24CAD4',
					}}
				>
					Соревнования
				</Text>
			</View>
			</TouchableOpacity>





			<TouchableOpacity  onPress={() => {
						navigation.navigate('Чат')
					}}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingLeft: 120,
					paddingRight: 50,
					paddingHorizontal: 8,
					backgroundColor: 'white',
					borderRadius: 10,
					marginTop: 10
					
				}}
			>
				<Image
					source={chat}
					style={{ width: 25, height: 25, marginTop: 5 }}
				></Image>
				<Text
					style={{
						fontSize: 15,
						fontWeight: 'bold',
						paddingLeft: 15,
						color: '#24CAD4',
					}}
				>
					Чат
				</Text>
			</View>
			</TouchableOpacity>
			
      
		</SafeAreaView>
	)
}

export default ProfileScreen1

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#9AC4F8',

		justifyContent: 'flex-start',
	},
})
