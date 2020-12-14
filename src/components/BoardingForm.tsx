import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Transitioning, TransitioningView } from 'react-native-reanimated';
import { Slide } from '../utils/animations';
import Signup from './Signup';
import Signin from './Signin';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

const BoardingForm = () => {
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
                        style={{borderBottomWidth: !showSignup ? 1 : 0,}}
						onPress={() => {
							tabOneRef.current?.animateNextTransition();
							setShowSignup(false);
						}}
					>
						<Text>Login</Text>
					</TouchableOpacity>
					<TouchableOpacity
                        style={{borderBottomWidth: showSignup ? 1 : 0}}
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
						transition={<Slide type='fade' />}
					>
						{showSignup && <Signup />}
					</Transitioning.View>
				</View>

				<View
					style={{
						position: 'absolute',
						bottom: '-10%',
						left: '45%',
						width: 90,
						height: 90,
						borderRadius: 90,
						backgroundColor: 'white',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<TouchableOpacity activeOpacity={0.8}>
						<LinearGradient
							colors={['#453dcb', '#00d4ff']}
							end={{ y: 0.99, x: 0.99 }}
							style={{
								backgroundColor: 'lightblue',
								width: 75,
								height: 75,
								justifyContent: 'center',
								alignItems: 'center',
								borderRadius: 75,
							}}
						>
							<Feather name='arrow-right' size={45} color='white' />
						</LinearGradient>
					</TouchableOpacity>
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
		position: 'relative',
		flex: 1,
		top: -100,
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
