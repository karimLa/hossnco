import React from 'react';
import {
	Keyboard,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BoardingForm from '../components/BoardingForm';
import { useLocalization } from '../context/Localization';

const BoardingScreen = () => {
	const { t } = useLocalization();

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<LinearGradient
					style={styles.headerContainer}
					colors={['#453dcb', '#00d4ff']}
					end={{ y: 0.99, x: 0.99 }}
				>
					<Text style={styles.headline}>{t('greeting')}</Text>
					<Text style={styles.paragraph}>{t('onBoardingIntro')}</Text>
				</LinearGradient>

				<BoardingForm />

				<View style={styles.footer}>
					<Text>HOSS & COMPANY</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default BoardingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	headerContainer: {
		paddingHorizontal: '6%',
		paddingTop: '20%',
		height: '40%',
	},
	headline: {
		color: 'white',
		fontSize: 30,
	},
	paragraph: {
		color: '#eee',
		fontSize: 15,
		marginTop: 15,
	},
	footer: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '10%',
	},
});
