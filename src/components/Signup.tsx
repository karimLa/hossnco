import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextInput from './TextInput';
import { Feather } from '@expo/vector-icons';

const Signup = () => {
	return (
		<View>
			<View style={styles.container}>
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
		</View>
	);
};

export default Signup;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		height: '83%',
	},
});
