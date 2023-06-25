import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState, useContext } from 'react'
import { Image, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native'
import { FitnessItems } from '../Context'

const FitScreen = () => {
	const route = useRoute()
	//console.log(route.params)
	const navigation = useNavigation()
	const [index, setIndex] = useState(0)
	const excersise = route.params.excersises
	const current = excersise[index]
	//console.log(current, 'first excersise')
	const {
		completed,
		setCompleted,
		minutes,
		setMinutes,
		calories,
		setCalories,
		setWorkout,
		workout,
	} = 
	useContext(FitnessItems)
	console.log(completed,"completed excersise")
	return (
		<SafeAreaView>
			<Image
				style={{ width: '100%', height: 370 }}
				source={{ uri: current.image }}
			/>

			<Text
				style={{
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: 30,
					fontSize: 30,
					fontWeight: 'bold',
				}}
			>
				{current.name}
			</Text>

			<Text
				style={{
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: 30,
					fontSize: 38,
					fontWeight: 'bold',
				}}
			>
				x{current.sets}
			</Text>
			{index + 1 >= excersise.length ? (
				<Pressable
					onPress={() => {
						navigation.navigate('Home')

						setTimeout(() => {
							setIndex(index + 1)
						}, 2000)
					}}
					style={{
						backgroundColor: 'red',
						marginLeft: 'auto',
						marginRight: 'auto',
						marginTop: 30,
						borderRadius: 20,
						padding: 10,
						width: 150,
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
						ЗАВЕРШИТЬ
					</Text>
				</Pressable>
			) : (
				<Pressable
					onPress={() => {
						navigation.navigate('Rest')
						setCompleted([...completed, current.name])
						setWorkout(workout + 1)
						setMinutes(minutes + 2.5)
						setCalories(calories + 6.3)
						setTimeout(() => {
							setIndex(index + 1)
						}, 2000)
					}}
					style={{
						backgroundColor: 'red',
						marginLeft: 'auto',
						marginRight: 'auto',
						marginTop: 30,
						borderRadius: 20,
						padding: 10,
						width: 150,
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
						ЗАВЕРШИТЬ
					</Text>
				</Pressable>
			)}
			<Pressable
				disabled={index === 0}
				onPress={() => {
					navigation.navigate('Rest')
					setTimeout(() => {
						setIndex(index - 1)
					}, 2000)
				}}
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: 50,
				}}
			>
				
				
				{index + 1 >= excersise.length ? (
					<Pressable
						onPress={() => {
							navigation.navigate('Home')
						}}
						style={{
							backgroColor: 'green',
							padding: 10,
							borderRadius: 20,
							marginHorizontal: 20,
							width: 120,
						}}
					>
						<Text
							style={{
								color: 'white',
								fontWeight: 'bold',
								textAlign: 'center',
							}}
						>
							ВЫЙТИ
						</Text>
					</Pressable>
				) : (
					<Pressable
						onPress={() => {
							navigation.navigate('Home')

							setTimeout(() => {
								setIndex(index + 1)
							}, 2000)
						}}
						style={{
							backgroundColor: 'green',
							padding: 10,
							borderRadius: 20,
							marginHorizontal: 20,
							width: 120,
						}}
					>
						<Text
							style={{
								color: 'white',
								fontWeight: 'bold',
								textAlign: 'center',
							}}
						>
							ВЫЙТИ
						</Text>
					</Pressable>
				)}
			</Pressable>
		</SafeAreaView>
	)
}

export default FitScreen

const styles = StyleSheet.create({})