import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInput from './TextInput';
import { Feather } from '@expo/vector-icons';

const Signup = () => {
	return (
		<View style={styles.container}>
			<View style={styles.inputGroup}>
				<TextInput
					placeholder='Username'
					icon={<Feather name='user' size={24} color='gray' />}
				/>
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
			<View
				style={{
					marginTop: 15,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text style={{ color: 'gray' }}>
					By pressing submit, you agree to our
				</Text>
				<Text style={{ color: 'blue' }}>terms & conidtions</Text>
			</View>
		</View>
	);
};

export default Signup;

const styles = StyleSheet.create({
	container: {
		height: 400,
	},
	inputGroup: {
		justifyContent: 'space-between',
		height: '45%',
	},
});
