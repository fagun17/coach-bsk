import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import fitness from '../fitness'
import { useNavigation } from '@react-navigation/native'
const FitnessCards = () => {
	const FitnessData = fitness;
	const navigation = useNavigation();
	return (
		<View>
			
			{FitnessData.map((item, key) => (
				<Pressable
				onPress={() => navigation.navigate("Workout",{
					image:item.image,
					excersises:item.excersises,
					id:item.id,
				})}
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						margin: 10,
					}}
					key={key}
				>
					<Image
						style={{ width: '100%', height: 140, borderRadius: 8 }}
						source={{ uri: item.image }}
					/>
					<Text
						style={{
							position: 'absolute',
							color: '#FFFF',
							fontSize: 16,
							fontWeight: 'bold',
							left: 20,
							top: 20,
						}}
					>
						{item.name}
					</Text>
					<MaterialCommunityIcons
						style={{
							position: 'absolute',
							color: 'white',
							bottom: 15,
							right: 20,
						}}
						name='cards'
						size={24}
						color='black'
					/>
				</Pressable>
			))}
		</View>
		
	)
}

export default FitnessCards

const styles = StyleSheet.create({})
