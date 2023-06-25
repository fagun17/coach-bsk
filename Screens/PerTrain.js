import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity,
	FlatList,
	Image,
	Modal
} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Form1 from '../data/components/Form1';

export default function PerTrain({ navigation }) {
	const LoadScene = () => {
		navigation.navigate('FullInfo')
	}

	const [news, setNews] = useState([
		{
			name: 'Прыжки на скакалке',
			anons: 'Количество подходов - 5',
			full: 'Прыжки через скакалку способствуют развитию точности и быстроты, согласованности своих движений со скоростью и направлением движений скакалкиПрыжки через скакалку используют для разминки укрепления мышц ног, улучшения координации и подвижности стоп, они развивают как аэробные, так и анаэробные возможности организма.',
			key: '1',
			img: 'https://www.polsov.com/upload/014/u1405/4/1/bdc8d070.jpeg',
		},
		{
			name: 'Планка',
			anons: 'Количество подходов - 10',
			full: 'Планка – это стойка на руках или локтях с одновременным напряжением мышц спины, пресса и задней поверхности бедра. Упражнение помогает укрепить мускулатуру, улучшить осанку и повысить выносливость. Стоя в планке, нужно удерживать положение как можно дольше, не сбивая дыхания. Планка считается одним из лучших статических упражнений на пресс, но оно также позволяет подтянуть бёдра и ягодицы.',
			key: '2',
			img: 'https://sportishka.com/uploads/posts/2022-03/1648549529_59-sportishka-com-p-uprazhnenie-planka-dlya-pokhudeniya-sport-68.jpg',
		},
		{
			name: 'Шахматы',
			anons: 'Количество игр в день - 2',
			full: 'Шахматы - это настольная игра для двух игроков ... Шахматы - это абстрактная стратегическая игра, в которой нет скрытой информации и элементов случайности.',
			key: '3',
			img: 'https://www.bon-cadeau.ru/mdata/gallery/size3/1184/4656.jpg',
		},
	])


	const [modalWindow, setModalWindow] = useState(false)

	const addArticle = (article) => {
    setNews((list) =>{
			article.key = Math.random().toString()
			return [
				article,
				...list
			]
		})
		setModalWindow(false)
	}


	return (
		<View style={StyleSheet.main}>
			<Modal visible={modalWindow}>
			
			<View>
			<Ionicons name="close-circle-sharp" size={34} color="red" style={styles.close} onPress={() => setModalWindow(false)}/>
				<Text style={styles.title}>Форма добавления персональных тренировок

				</Text>
				<Form1 addArticle={addArticle}/>
			</View>
			</Modal>
			<Ionicons name="add-circle-sharp" size={34} color="green" style={styles.iconAdd} onPress={() => setModalWindow(true)}/>
			<Text style={[styles.header, styles.title]}>Список тренировок</Text>
			<FlatList
				data={news}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate('FullInfo', item)}
					>
						<Image source={{ uri: item.img}}
							style={{
								width: '100%',
								height: 200,
								borderRadius: 50,
								
								
							}}
						/>
						<Text style ={styles.title}>{item.name}</Text>
						<Text style ={styles.title}>{item.anons}</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	)
						}
	const styles = StyleSheet.create({
		iconAdd: {
    textAlign: 'center',
		marginBottom: 0,
		marginTop: 30
		},
		close: {
			textAlign: 'center',
			marginBottom: 0,
			marginTop: 90
			},
		header: {
			marginBottom: 30,
		},
		item: {
			width: '100%',
			marginBottom: 30
		},
		title: {
			fontSize: 22,
			textAlign: 'center',
			marginTop: 10,
			color: '#474747'
		},
		anons: {
			fontSize: 16,
			textAlign: 'center',
			marginTop: 5,
      color: '#474747'
		}
	})

