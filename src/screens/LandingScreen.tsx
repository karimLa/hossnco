import React, { useState } from 'react';
import {
	ImageBackground,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
	useWindowDimensions,
} from 'react-native';
import BtnPrimary from '../components/BtnPrimary';
import { useLocalization } from '../context/Localization';
import { LandingProps } from '../types/navigation.d';
import { landingScreenBg } from '../constants/images';
import { storeData } from '../utils/storage';

const LandingScreen: React.VFC<LandingProps> = ({ navigation }) => {
	const { t, locale, setLocale } = useLocalization();
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const { width, height } = useWindowDimensions();
	const btns: { text: string; code: typeof locale }[] = [
		{ text: t('french'), code: 'fr' },
		{ text: t('english'), code: 'en' },
		{ text: t('arabic'), code: 'ar' },
	];

	return (
		<View style={styles.container}>
			<ImageBackground source={landingScreenBg} style={styles.image}>
				<View
					style={{
						width: width * 0.8,
						height: height * 0.8,
						justifyContent: 'center',
					}}
				>
					<Text style={styles.title}>{t('chooseLanguage')}</Text>

					{btns.map((btn, i) => (
						<BtnPrimary
							key={btn.code}
							text={btn.text}
							index={i}
							selectedIndex={selectedIndex}
							onPress={() => {
								setLocale(btn.code);
								setSelectedIndex(i);
							}}
						/>
					))}
				</View>
				<TouchableHighlight
					style={styles.submitBtn}
					onPress={() => {
						storeData('locale', locale);
						navigation.navigate('Boarding');
					}}
				>
					<Text style={styles.submitBtnText}>{t('go')}!</Text>
				</TouchableHighlight>
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
