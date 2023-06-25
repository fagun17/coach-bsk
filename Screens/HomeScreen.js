import React, { useContext } from 'react'
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Pressable,
} from 'react-native'
import FitnessCards from '../data/components/FitnessCards'
import { FitnessItems } from '../Context'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import WorkoutScreen from '../Screens/WorkoutScreen'


const HomeScreen = () => {
	const navigation = useNavigation('Main')
	const {
		minutes,

		calories,

		workout,
	} = useContext(FitnessItems)
	
	return (
		<ScrollView style={{ }}>
			
			<View
			
				style={{
					backgroundColor: '#CD853F',
					padding: 10,
					height: 200,
					width: '100%',
				}}
			>
				<Pressable>
				<Ionicons
			onPress={() => navigation.navigate('Спорт и фитнес')}
			style={{ position: "absolute", top: 45, left: 20, borderRadius: 3 }}
			name="arrow-back-outline"
			size={34}
			color="white"
		/>
		</Pressable>
				<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center',marginTop: 50}}>
					{' '}
					СПОРТ И ФИТНЕС
				</Text>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginTop: 20,
					}}
				>
					<View>
						<Text
							style={{
								textAlign: 'center',
								fontWeight: 'bold',
								color: 'white',
								fontSize: 18,
							}}
						>
							{workout}
						</Text>
						<Text style={{ color: '#D0D0D0', fontSize: 17, marginTop: 6 }}>
							ТРЕНИРОВКИ
						</Text>
					</View>

					<View>
						<Text
							style={{
								textAlign: 'center',
								fontWeight: 'bold',
								color: 'white',
								fontSize: 18,
							}}
						>
							{calories}
						</Text>
						<Text style={{ color: '#D0D0D0', fontSize: 17, marginTop: 6 }}>
							КАЛОРИИ
						</Text>
					</View>

					<View>
						<Text
							style={{
								textAlign: 'center',
								fontWeight: 'bold',
								color: 'white',
								fontSize: 18,
							}}
						>
							{minutes}
						</Text>
						<Text style={{ color: '#D0D0D0', fontSize: 17, marginTop: 6 }}>
							МИНУТЫ
						</Text>
					</View>
				</View>

				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Image
						style={{
							width: '90%',
							height: 120,
							marginTop: 20,
							borderRadius: 7,
						}}
						source={{
							uri: 'https://regions.kp.ru/ufa/nedeli-bolshoj-khimii-ot-bsk/images/tild3530-3965-4931-a266-623037373465__shumnov-prev-2071.jpg',
						}}
					/>
				</View>
				<FitnessCards onPress={() => {
						navigation.navigate('Workout') }}/>
			</View>
			
		</ScrollView>
	)
}

export default HomeScreen 

const styles = StyleSheet.create({})
