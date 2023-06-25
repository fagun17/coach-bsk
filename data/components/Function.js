import { StyleSheet, View, FlatList, SafeAreaView, Text } from 'react-native'
import React, { useState } from 'react'
import ListItem from './listItem'
import Form from './Form'

export default function Function() {
	const [listOfItems, setlistOfItems] = useState([
		{ text: '100 отжиманий за минуту', key: '1' },
		{ text: '100 метров за 14 секунд', key: '2' },
		{ text: '120 прыжков на скакалке за минуту', key: '3' },
		{ text: '3 минуты в планке', key: '4' },
	])

	const addHandler = text => {
		setlistOfItems(list => {
			return [{ text: text, key: Math.random().toString(36).substring(7) }, ...list]
		})
	}


	const deleteHandler =(key) => {
		setlistOfItems((list) => {
			return list.filter(listOfItems =>listOfItems.key != key)
		});
	}
	return (
		<SafeAreaView>
		
				<Text
						style={{
							textAlign: 'center',
							fontWeight: 'bold',
							fontSize: 20,
							color: 'purple',
							marginTop: 30
						}}
					>
					 ЗАРЕГИСТРИРОВАТЬ  ДОСТИЖЕНИЕ
					</Text>
			
			
			<Form addHandler={addHandler} />
			<View>
				<FlatList
					data={listOfItems}
					renderItem={({ item }) => <ListItem el={item} deleteHandler={deleteHandler} />}
				/>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({})
