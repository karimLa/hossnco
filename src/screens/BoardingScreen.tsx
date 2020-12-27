import React from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalization } from '../context/Localization';
import Box from '../components/Box';
import Text from '../components/Text';
import useTheme from '../context/useTheme';
import BoardingForm from '../components/BoardingForm';

const BoardingScreen = () => {
	const { colors } = useTheme();
	const { t } = useLocalization();

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<Box flex={1}>
				<Box height='40%'>
					<LinearGradient
						style={styles.headerContainer}
						colors={[colors.gradientStart, colors.gradientEnd]}
						end={{ y: 0.99, x: 0.99 }}
					>
						<Text color='textWhite' fontSize={30}>
							{t('greeting')}
						</Text>
						<Text color='mainHeadline' fontSize={15} marginTop='lg'>
							{t('onBoardingIntro')}
						</Text>
					</LinearGradient>
				</Box>

				<Box justifyContent='space-between' height='60%'>
					<BoardingForm />

					<Box justifyContent='center' alignItems='center' paddingVertical='xl'>
						<Text>HOSS & COMPANY</Text>
					</Box>
				</Box>
			</Box>
		</TouchableWithoutFeedback>
	);
};

export default BoardingScreen;

const styles = StyleSheet.create({
	headerContainer: {
		height: '100%',
		paddingHorizontal: '8%',
		paddingTop: '20%',
	},
});
