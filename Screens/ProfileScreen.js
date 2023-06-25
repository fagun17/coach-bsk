import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, Animated,  } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'expo-status-bar'
// tab isons
import winner from '../assets/winner.png'
import heart from '../assets/heart-rate.png'
import cogwheel from '../assets/cogwheel.png'
import sport from '../assets/sport.png'
import fitness from '../assets/fitness.png'
import resours from '../assets/resours.png'
import sportzall from '../assets/sportzall.png'
import turnir from '../assets/turnir.png'
import chat from '../assets/chat.png'
import logout from '../assets/logout.png'
// menu
import burger from '../assets/burger.png'
import close from '../assets/close.png'
// photo
import alexis2 from '../assets/alexis2.png'
import weightlifting from '../assets/weightlifting.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


 function ProfileScreen() {
	
	const navigation = useNavigation()
	const [currentTab,setCurrentTub] = useState("Главная")
	// To get the current Status of menu
  const [showMenu,setShowMenu] = useState(false)
	// Animated Properties...
	const offsetValue = useRef(new Animated.Value(0)).current;
	// scale initially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
	
	return (
		<SafeAreaView style={styles.container}>
			<View style={{ justifyContent: 'flex-start', padding: 15 }}>
				<Image
					source={alexis2}
					style={{
						width: 60,
						height: 60,
						borderRadius: 20,
						marginTop: 8,
					}}
				></Image>
				<Text
					style={{
						fontSize: 20,
						fontWeight: 'bold',
						color: 'white',
						marginTop: 20,
					}}
				>
					Сапунов Александр
				</Text>

				<TouchableOpacity>
					<Text
						style={{
							marginTop: 6,
							color: 'white',
						}}
					>
						Показать профиль
					</Text>
				</TouchableOpacity>

				<View style = {{flexGrow: 1, marginTop: 50}}>
					{
						//Tabs
					}
         
					{TabButton(currentTab, setCurrentTub,"Cпорт и фитнес",sport) } 
					{TabButton(currentTab, setCurrentTub,"Достижения",winner)}
					{TabButton(currentTab, setCurrentTub,"Здоровье",heart)}
					{TabButton(currentTab, setCurrentTub,"Персональные тренировки",fitness)}
					{TabButton(currentTab, setCurrentTub,"Настройки",cogwheel)}
					{TabButton(currentTab, setCurrentTub,"Ресурсы",resours)}
					{TabButton(currentTab, setCurrentTub,"Запись в спортзал",sportzall)}
					{TabButton(currentTab, setCurrentTub,"Соревнования",turnir)}
					{TabButton(currentTab, setCurrentTub,"Чат",chat)}
					
				</View>

				<View>
				{TabButton(currentTab, setCurrentTub,"Выйти",logout)}
				</View>
				
			</View >
			{
				//Over lay view
			}
			<Animated.View style = {{
				flexGrow: 1,
				backgroundColor: 'white',
				position: 'absolute',
				paddingHorizontal: 15,
				paddingVertical: 20,
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				borderRadius: showMenu ? 15: 0,
				// Transforming View...
				transform: [
					{ scale: scaleValue},
					{translateX: offsetValue}
				]
			}}>
				{
// Menu Button
			}
			<Animated.View style ={{
				transform: [{
					translateY: closeButtonOffset
				}]
			}}>
			<TouchableOpacity onPress ={() =>{
				// Do Actions Here...
				// Scaling the view...
				Animated.timing(scaleValue, {
					toValue: showMenu ? 1: 0.88,
					duration: 300,
					useNativeDriver: true
				})
				.start()
				
				Animated.timing(offsetValue, {
					toValue: showMenu ? 0: 230,
					duration: 300,
					useNativeDriver: true
				})
				.start()
				Animated.timing(closeButtonOffset, {
					toValue: !showMenu ? -30: 0,
					duration: 300,
					useNativeDriver: true
				})
				.start()
				setShowMenu(!showMenu)
			}}>
				<Image source={showMenu ? close: burger} style = {{
					width: 20,
					height: 20,
					tintColor: 'black',
					marginTop: 50,
					paddingHorizontal: 12,
					paddingLeft: 15
				}}></Image>
				
				
				
			</TouchableOpacity>
			<Text style ={{
             fontSize: 30,
						 fontWeight: 'bold',
						 color: 'black',
						 paddingTop: 20
				 
				}}>{currentTab}</Text>
			<Image source={alexis2} style = {{
					width: '100%',
					height: 300,
					borderRadius: 15,
					marginTop: 20
				}}></Image>
			<Text style = {{
					fontSize: 20,
					fontWeight: 'bold',
					paddingTop: 15,
          paddingBottom: 5
				}}>
          Сапунов Александр
				</Text>

				<Text style = {{}}> Разработчик, программист, Инженер АСУ ТП</Text>
				<Text style = {{fontSize: 15,fontWeight: 'bold',paddingTop: 15}}> БАЛЛЫ: 125</Text>
				</Animated.View>
				</Animated.View>
		</SafeAreaView>
	)
}
 
// for buttons



const TabButton = (currentTab,setCurrentTub, title,image) => {
	
		
	return (
		
		<TouchableOpacity onPress={() =>{
			if (title == "Выйти") {
				// do your stuff
			} else {
			setCurrentTub(title)
			}
		}}
		>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingVertical: 10,
					backgroundColor: currentTab == title ? 'white':'transparent',
					borderRadius: 10,
					paddingLeft: 13,
					paddingRight: 30,
					marginTop: 8
				}}
			>
				<Image source={image} style={{ width: 25, height: 25, }}></Image>
				<Text
					style={{
						fontSize: 15,
						fontWeight: 'bold',
						paddingLeft: 15,
						color: currentTab == title ? '#5359D1': 'white'
					}}
				>
					{title}
				</Text>
			</View>
		</TouchableOpacity>

	)
				}

			
export default ProfileScreen
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#9AC4F8',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
})
