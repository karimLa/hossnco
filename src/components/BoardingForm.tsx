import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Transitioning, TransitioningView } from 'react-native-reanimated';
import { Slide } from '../utils/animations';
import Signup from './Signup';
import Signin from './Signin';

const BoardingForm = () => {
	const tabOneRef = useRef<TransitioningView>();
	const tabTwoRef = useRef<TransitioningView>();

	let [showSignup, setShowSignup] = useState(false);

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
						onPress={() => {
							tabOneRef.current?.animateNextTransition();
							setShowSignup(false);
						}}
					>
						<Text>Login</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							tabTwoRef.current?.animateNextTransition();
							setShowSignup(true);
						}}
					>
						<Text>Sign up</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.pager}>
					<Transitioning.View
						ref={tabOneRef}
						transition={<Slide type='slide-left' />}
					>
						{!showSignup && <Signin />}
					</Transitioning.View>

					<Transitioning.View
						ref={tabTwoRef}
						transition={<Slide type='slide-right' />}
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
		height: '50%',
		paddingHorizontal: '6%',
	},
	form: {
		backgroundColor: 'white',
		position: 'relative',
		flex: 1,
		top: -50,
		borderRadius: 30,
		paddingVertical: 20,
		paddingHorizontal: 30,
		elevation: 2,
	},
	pager: {
		marginTop: 30,
		overflow: 'hidden',
	},
});
