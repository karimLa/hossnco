import React, { useContext } from 'react';

import {
	ImageBackground,
	ImageSourcePropType,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	useWindowDimensions,
} from 'react-native';
import { LocalizationContext } from '../context/Localization';

const image: ImageSourcePropType = require('../../assets/lang-bg-1.jpg');

const LandingScreen = () => {
	const { t, setLocale } = useContext(LocalizationContext);
	const { width, height } = useWindowDimensions();
	const btns = [
		{ text: t('french'), code: 'fr' },
		{ text: t('english'), code: 'en' },
		{ text: t('arabic'), code: 'ar' },
	];

	return (
		<View style={styles.container}>
			<ImageBackground source={image} style={styles.image}>
				<View
					style={{
						width: width * 0.8,
						height: height * 0.8,
						justifyContent: 'center',
					}}
				>
					<Text style={styles.title}>{t('chooseLanguage')}</Text>

					{btns.map((btn) => (
						<TouchableOpacity
							key={btn.code}
							activeOpacity={0.8}
							style={styles.langBtn}
							onPress={() => setLocale(btn.code)}
						>
							<Text style={styles.langBtnText}>{btn.text}</Text>
						</TouchableOpacity>
					))}
				</View>
				<TouchableOpacity style={styles.submitBtn} onPress={() => null}>
					<Text style={styles.submitBtnText}>{t('go')}!</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
};

export default LandingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 26,
		color: '#ccc',
		fontWeight: '700',
		marginBottom: 30,
		alignSelf: 'center',
	},
	langBtn: {
		backgroundColor: 'white',
		borderColor: 'blue',
		fontSize: 20,
		borderWidth: 1,
		borderRadius: 10,
		marginTop: 25,
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	langBtnText: {
		fontSize: 18,
		color: 'blue',
		alignSelf: 'center',
	},
	submitBtn: {
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ccc',
		width: 80,
		height: 80,
		padding: 10,
		borderRadius: 40,
	},
	submitBtnText: {
		alignSelf: 'center',
		fontSize: 18,
		color: 'blue',
	},
});
