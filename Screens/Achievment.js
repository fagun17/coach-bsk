import { StyleSheet, Text, View, FlatList, SafeAreaView, Image,Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Function from '../data/components/Function'
import { ScrollView } from 'react-native-gesture-handler'
const Achievment = () => {
	const navigation = useNavigation()


	return ( 
<ScrollView >

	<Function />
	<Pressable
		onPress={() => {
						navigation.navigate('Главная')
					}}
					style={{
						backgroundColor: '#7B68EE',
						marginLeft: 'auto',
						marginRight: 'auto',
						marginTop: 30,
						borderRadius: 20,
						padding: 10,
						width: 310,
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
					 МЕНЮ
					</Text>
				</Pressable>

				<Image
        source={{
          uri: "https://klike.net/uploads/posts/2020-08/1597651449_35.jpg",
        }}
        style={{ width: "100%", height: 190,borderRadius: 50, textAlign:"center", padding: 30, marginTop: 10 }}
      />

</ScrollView>

	)
}

export default Achievment