import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
export default function Form1({addArticle}) {
	return (
		<View>
			<Formik
				initialValues={{ name: '', anons: '', full: '', img: '' }}
				onSubmit={(values, action) => {
					addArticle(values)
					action.ressetForm()
				}}
			>
				{props => (
					<View>
						<TextInput style={styles.input}
							value={props.values.name}
							placeholder='Введите название упражнения'
							onChangeText={props.handleChange('name')}
						/>
						<TextInput style={styles.input}
							value={props.values.anons}
							multiline
							placeholder='Введите количество подходов'
							onChangeText={props.handleChange('anons')}
						/>
						<TextInput style={styles.input}
							value={props.values.full}
							multiline
							placeholder='Введите описание упражнения'
							onChangeText={props.handleChange('full')}
						/>
						<TextInput style={styles.input}
							value={props.values.img}
							placeholder='Укажите фото'
							onChangeText={props.handleChange('img')}
						/>
						<Button title='Добавить' onPress={props.handleSubmit}/>

						<Image source={{ uri: 'https://www.soda.ru/upload/news/IMG_3202.JPG'}}
							style={{
								width: '100%',
								height: 300,
								borderRadius: 100,
								padding: 10, 
								marginTop: 15
								
								
							}}
						/>
					</View>
				)}
			</Formik>
		</View>
	)
}

const styles = StyleSheet.create({
	input:{
		borderWidth: 1,
		marginTop: 15,
		padding: 15,
		borderColor: '#24CAD4',
		borderRadius: 10,
		fontSize: 20
	}
})
