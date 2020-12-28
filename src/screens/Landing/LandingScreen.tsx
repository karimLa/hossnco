import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useLocalization } from '../../context/Localization';
import { LandingProps } from '../../types/navigation.d';
import { landingScreenBg } from '../../constants/images';
import { storeData } from '../../utils/storage';
import Text from '../../components/Text';
import Box from '../../components/Box';
import ButtonHighlight from '../../components/ButtonHighlight';
import ImageBackground from '../../components/ImageBackground';

const LandingScreen: React.VFC<LandingProps> = ({ navigation }) => {
	const { t, locale, setLocale } = useLocalization();
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const btns: { text: string; code: typeof locale }[] = [
		{ text: t('french'), code: 'fr' },
		{ text: t('english'), code: 'en' },
		{ text: t('arabic'), code: 'ar' },
	];

	return (
		<ImageBackground
			source={landingScreenBg}
			resizeMode='cover'
			flex={1}
			justifyContent='center'
			alignItems='center'
		>
			<Box width='80%' height='80%' justifyContent='center' alignItems='center'>
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

			<ButtonHighlight
				justifyContent='center'
				alignItems='center'
				width={85}
				height={85}
				borderRadius={42.5}
				backgroundColor='mainBackground'
				text={t('go')}
				onPress={() => {
					if (selectedIndex === -1) {
						Alert.alert(t('chooseLanguage'));
						return;
					}
					storeData('locale', locale);
					navigation.navigate('OnBoarding');
				}}
			/>
		</ImageBackground>
	);
};

export default LandingScreen;
