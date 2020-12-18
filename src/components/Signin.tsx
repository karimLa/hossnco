import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TextInput from './TextInput';
import { Feather } from '@expo/vector-icons';
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { signInSchema } from '../utils/validation';
import { Formik } from 'formik';
import { LinearGradient } from 'expo-linear-gradient';

const Signin = () => {
	const [rememberMe, setRememberMe] = useState(false);

	return (
		<View style={styles.container}>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={signInSchema}
				onSubmit={(values) => console.log(values)}
			>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
					touched,
					errors,
				}) => (
					<>
						<View style={styles.inputGroup}>
							<TextInput
								placeholder='Email Address'
								name='email'
								errors={errors}
								touched={touched}
								value={values.email}
								onBlur={handleBlur('email')}
								onChangeText={handleChange('email')}
								icon={<Feather name='user' size={24} color='gray' />}
							/>
							<TextInput
								placeholder='Password'
								name='password'
								value={values.password}
								onBlur={handleBlur('password')}
								onChangeText={handleChange('password')}
								autoCorrect={false}
								touched={touched}
								errors={errors}
								secureTextEntry
								icon={<Feather name='key' size={24} color='gray' />}
							/>
						</View>

						<View
							style={{
								position: 'absolute',
								bottom: -45,
								width: 90,
								height: 90,
								borderRadius: 90,
								backgroundColor: 'white',
								justifyContent: 'center',
								alignItems: 'center',
								left: '50%',
								transform: [{ translateX: -45 }],
								zIndex: 10,
							}}
						>
							<TouchableOpacity activeOpacity={0.8} onPress={handleSubmit}>
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
					</>
				)}
			</Formik>

			<View style={styles.actions}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<CheckBox
						disabled={false}
						value={rememberMe}
						lineWidth={2}
						boxType={'circle'}
						animationDuration={0.5}
						onAnimationType={'bounce'}
						offAnimationType={'stroke'}
						onValueChange={(newValue) => setRememberMe(newValue)}
					/>
					<TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
						<Text style={{ color: 'gray' }}>Remember me</Text>
					</TouchableOpacity>
				</View>

				<TouchableOpacity>
					<Text style={{ color: 'blue' }}>Forgot Password ?</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Signin;

const styles = StyleSheet.create({
	container: {
		height: '100%',
		position: 'relative',
	},
	inputGroup: {
		justifyContent: 'space-between',
	},
	actions: {
		marginTop: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});
