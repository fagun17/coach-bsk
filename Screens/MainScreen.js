import {
	AntDesign,
	MaterialCommunityIcons,
	MaterialIcons, 
} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
	ImageBackground,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	View, TouchableOpacity
} from 'react-native'


const MainScreen = ({}) => {
	const navigation = useNavigation()

	return (
		<SafeAreaView >
			<View>
			
			</View>
			<ImageBackground
				source={{
					uri: 'https://img.freepik.com/free-photo/top-view-on-yoga-essential-items_23-2149458941.jpg?w=900&t=st=1687635797~exp=1687636397~hmac=a3eef9cea0800c4e96709ce3d383e57705104e227e2c88ca0be32114a5d2b424',
				}}
				style={{ width: '100%', height: 830}}
			>
				

				<Pressable
					onPress={() => {
						navigation.navigate('Home')
					}}
					style={{
						backgroundColor: '#24CAD4',
						marginLeft: 'auto',
						marginRight: 'auto',
						marginTop: 280,
						borderRadius: 20,
						padding: 10,
						width: 210,
					}}
				>
					<Text
						style={{
							textAlign: 'center',
							fontWeight: 'bold',
							fontSize: 20,
							color: 'white',
						}}
					>
						ПРОГРАММЫ ТРЕНИРОВОК
					</Text>
				</Pressable>

				<Pressable
					onPress={() => {
						navigation.navigate('Беговая тренировка')
					}}
					style={{
						backgroundColor: '#FF5511',
						marginLeft: 'auto',
						marginRight: 'auto',
						marginTop: 120,
						borderRadius: 20,
						padding: 10,
						width: 210,
					}}
				>
					<Text
						style={{
							textAlign: 'center',
							fontWeight: 'bold',
							fontSize: 20,
							color: 'white',
						}}
					>
						БЕГОВАЯ ТРЕНИРОВКА
					</Text>
				</Pressable>
				
					
			</ImageBackground>
		</SafeAreaView>
	)
}

export default MainScreen

const styles = StyleSheet.create({})
