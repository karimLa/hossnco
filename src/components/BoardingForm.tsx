import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Transitioning, TransitioningView } from 'react-native-reanimated';
import { Slide } from '../utils/animations';
import Signup from './Signup';
import Signin from './Signin';
import { useLocalization } from '../context/Localization';

const BoardingForm = () => {
	const { t } = useLocalization();
	const tabOneRef = useRef<TransitioningView>();
	const tabTwoRef = useRef<TransitioningView>();

	const [showSignup, setShowSignup] = useState(false);

	return (
		<View style={styles.formContainer}>
			<View style={styles.form}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<TouchableOpacity
						style={{ borderBottomWidth: !showSignup ? 1 : 0 }}
						onPress={() => {
							tabOneRef.current?.animateNextTransition();
							setShowSignup(false);
						}}
					>
						<Text>{t('signin')}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ borderBottomWidth: showSignup ? 1 : 0 }}
						onPress={() => {
							tabTwoRef.current?.animateNextTransition();
							setShowSignup(true);
						}}
					>
						<Text>{t('signup')}</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.pager}>
					<Transitioning.View
						ref={tabOneRef}
						transition={<Slide type='scale' />}
					>
						{!showSignup && <Signin />}
					</Transitioning.View>

					<Transitioning.View
						ref={tabTwoRef}
						transition={<Slide type='fade' />}
					>
						{showSignup && <Signup />}
					</Transitioning.View>
				</View>
			</View>
		</View>
	);
};

export default BoardingForm;

const styles = StyleSheet.create({
	formContainer: {
		height: 400,
		paddingHorizontal: '6%',
	},
	form: {
		height: '100%',
		backgroundColor: 'white',
		flex: 1,
		top: -100,
		borderRadius: 30,
		paddingVertical: 20,
		paddingHorizontal: 30,
		elevation: 2,
	},
	pager: {
		marginTop: 30,
	},
});
