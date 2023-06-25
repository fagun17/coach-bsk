import { StyleSheet, TextInput,Text, View, Button } from 'react-native'
import React, {useState} from 'react'

export default function Form ({addHandler}) {
	const [text, setValue] = useState('');
	const onChange = (text) => {
		setValue(text)

	}
	return (
		<View>
			<TextInput style={styles.input} onChangeText={onChange} placeholder = 'Опишите достижение'/>
			<Button color='#24CAD4' onPress={()=>addHandler(text)}title='ДОБАВИТЬ ДОСТИЖЕНИЕ'     />

			
		</View>
	)
}



const styles = StyleSheet.create({
	input: {
		borderBottomWidth: 1,
		borderColor: '#000',
		padding: 10,
		marginVertical: 30,
		marginHorizontal: '10%',
		width: '80%'

	}
})

	