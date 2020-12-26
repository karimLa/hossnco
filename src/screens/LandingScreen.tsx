import React, { useState } from 'react';
import {
	Alert,
	ImageBackground,
	StyleSheet,
	TouchableHighlight,
} from 'react-native';
import { useLocalization } from '../context/Localization';
import { LandingProps } from '../types/navigation.d';
import { landingScreenBg } from '../constants/images';
import { storeData } from '../utils/storage';
import Text from '../components/Text';
import Box from '../components/Box';
import ButtonHighlight from '../components/ButtonHighlight';

const LandingScreen: React.VFC<LandingProps> = ({ navigation }) => {
	const { t, locale, setLocale } = useLocalization();
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const btns: { text: string; code: typeof locale }[] = [
		{ text: t('french'), code: 'fr' },
		{ text: t('english'), code: 'en' },
		{ text: t('arabic'), code: 'ar' },
	];

	return (
		<Box flex={1}>
			<ImageBackground source={landingScreenBg} style={styles.image}>
				<Box
					width='80%'
					height='80%'
					justifyContent='center'
					alignItems='center'
				>
					<Text variant='header' marginBottom='md'>
						{t('chooseLanguage')}
					</Text>

					{btns.map((btn, i) => (
						<ButtonHighlight
							bgHighlight='gradientStart'
							width='80%'
							marginTop='md'
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
				</Box>
				<TouchableHighlight
					onPress={() => {
						if (selectedIndex === -1) {
							Alert.alert(t('chooseLanguage'));
							return;
						}
						storeData('locale', locale);
						navigation.navigate('Boarding');
					}}
				>
					<Box
						alignSelf='center'
						justifyContent='center'
						alignItems='center'
						width={80}
						height={80}
						padding='sm'
						borderRadius={40}
						backgroundColor='mainBackground'
					>
						<Text variant='btnText'>{t('go')}!</Text>
					</Box>
				</TouchableHighlight>
			</ImageBackground>
		</Box>
	);
};

export default LandingScreen;

const styles = StyleSheet.create({
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
