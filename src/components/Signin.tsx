import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TextInput from './TextInput';
import { Feather } from '@expo/vector-icons';
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Signin = () => {
	const [rememberMe, setRememberMe] = useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.inputGroup}>
				<TextInput
					placeholder='Email Address'
					icon={<Feather name='user' size={24} color='gray' />}
				/>
				<TextInput
					placeholder='Password'
					autoCorrect={false}
					type='password'
					icon={<Feather name='key' size={24} color='gray' />}
				/>
			</View>

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
	},
	inputGroup: {
		justifyContent: 'space-between',
		height: '35%',
	},
	actions: {
		marginTop: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});
