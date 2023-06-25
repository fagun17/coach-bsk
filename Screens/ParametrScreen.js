import { useNavigation } from '@react-navigation/native'
import React, {Component} from 'react'
import {
	Image,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	Alert,
	TextInput,
	Button,
	View,
} from 'react-native'


export default class ParametrScreen extends Component {


constructor(props)
{
	super(props);
	this.state={Num1:0,Num2:0,Num3:0,Num4:0,Sum5:''}
}
pressHandlerOne = () => {
Alert.alert("Здоровье", "Индекс массы вашего тела:  " + R+'   Тип вашего телосложения: ',[{text: "OK", onPress: ()=>console.log("srththtrsh")},
{text: 'Моя форма'}
])
}

	
   pressHandler = () => {
		
let q = ''
		let N1=parseInt(this.state.Num1)
	let N2=parseInt(this.state.Num2)
	let N3=parseInt(this.state.Num3)
	let N4=parseInt(this.state.Num4)
	let S5=(this.state.Sum5)
	let R = (N2/((N1/100)*(N1/100))).toFixed(2)
	if (R==R) {
	 if (R>40) {q = 'Ожирение 3 степени (морбидное). НЕОБХОДИМО НАЧАТЬ ХУДЕТЬ !!!'}
	 
	 else if (R > 35 && R<40) {q = 'Ожирение 2 степени. НУЖНО СРОЧНО ХУДЕТЬ !'}
	 else if (R>30 && R<=35) {q = 'Ожирение 1 степени. НУЖНО ХУДЕТЬ !'}
	 else if (R>18.5 && R<= 24.99) {q = 'ВАШ ВЕС В НОРМЕ !'}
	
	
	else if (R>=25 && R<=30) {q = 'Избыточная масса тела! Вам нужно немного похудеть !'}
	
	else if (R> 16 && R<=18.5) {q = 'Недостаточный вес тела ! НУЖНО НАБРАТЬ ВЕС!'}
	else if (R < 16) {q = 'Выраженный дефицит массы тела, ВАМ НУЖНО ПОДНАБРАТЬ!'}
	}
	
	
	
	
	
	let k = 1
	if (N4<15) {k==0.9}
	else if (15<=N4<=17) {k==1}
	else if (N4>17) {k==1.1}
	let S = ''

	let V = 0
	if ((S5=='ЖЕНСКИЙ') || (S5=='Женский') || (S5=='женский')) {
		 if (N4>18)  {S='Гиперстенический '}
		else if (N4<16) {S='Астенический ' }
		else if (16.5<=N4<=18) {S='Нормостенический'}
		V = ((3.5*N1/2.54-108)*0.453).toFixed(1)
	}
	else if ((S5=='МУЖСКОЙ') || (S5=='Мужской') || (S5=='мужской')) {
		if (N4>20){S='Гиперстенический'}
		else if (N4<=17) {S='Астенический '}
		else if (17.5<=N4<=20) {S='Нормостенический'}
		V = ((4*N1/2.54-128)*0.453).toFixed(1)
	}

	Alert.alert("Здоровье", "Индекс массы вашего тела:  " + R+'   Идеальный вес вашего тела: ' + V + '                                                         Тип вашего телосложения:  ' + S  + "            Рекомендации к похуданию: " + q,[{text: "OK", onPress: ()=>console.log("srththtrsh")},
	{text: 'Информация', onPress:()=>Alert.alert("Параметры здоровья", "Астеники - высокий рост и легкость в строении тела. Преобладание продольных размеров тела, (узкое лицо,длинная и тонкая шея, слаборазивтая мускулатура).                                         Нормостеники - анатомические особенности приближаются к усредненным параметрам (с учетом возраста, пола , веса), характеризуется нормальным телосложением.                                Гиперстеники - преобладание поперечных размеров, упитанность, не высокий рост. При гиперстеническом типе телосложения преобладают поперечные размеры тела, голова округлой формы, лицо короткое, шея короткая и толстая, кожа плотная")}
	])
	}



render() {
	return (
		<SafeAreaView>
			<Image
				// resizeMode="contain"
				source={{
					uri: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png',
				}}
				style={{ width: '100%', height: 200, borderRadius: 30, marginTop: 10 }}
			/>
			<View style={{ styles: 'container' }}>
				<TextInput style={styles.input} keyboardType='numeric' placeholder='ВВЕДИТЕ ВОЗРАСТ (полных лет)' onChangeText={Num3=>this.setState({Num3})} />
			</View>
			<TextInput style={styles.input} placeholder='ВВЕДИТЕ ПОЛ (полностью) 'onChangeText={Sum5=> this.setState({Sum5})} />
			<TextInput style={styles.input} keyboardType ='numeric' placeholder='ВВЕДИТЕ РОСТ (см)' onChangeText={Num1=> this.setState({Num1})}/>
			<TextInput style={styles.input} keyboardType='numeric' placeholder='ВВЕДИТЕ ВЕС (кг)'onChangeText={Num2=> this.setState({Num2})} />
			<TextInput style={styles.input} keyboardType='numeric' placeholder='ВВЕДИТЕ ОБХВАТ КИСТИ (см)' onChangeText={Num4=> this.setState({Num4})}/>
			<Pressable onPress={this.pressHandler}
				
				style={{
					backgroundColor: '#24CAD4',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: 1,
					borderRadius: 30,
					padding: 10,
					width: 280,
					height: 70,
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
					АНАЛИЗ ПАРАМЕТРОВ ЗДОРОВЬЯ
				</Text>
			</Pressable>
		</SafeAreaView>
	)
				}			
			}			


const styles = StyleSheet.create({
	main: {
		paddingTop: 40,
		height: 100,
		backgroundColor: '#24CAD4',
	},
	
	input: {
		borderBottomWidth: 1,
		borderColor: '#000',
		padding: 10,
		marginVertical: 50,
		marginHorizontal: '10%',
		marginTop: 5,
		backgroundColor: '#fafafa',
		container: {
			margin: 10,
			key: 1,
		},
	},
})
