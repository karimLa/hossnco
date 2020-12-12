import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextInput from './TextInput';
import { Feather } from '@expo/vector-icons';

const Signin = () => {
	return (
		<View style={styles.container}>
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
	);
};

export default Signin;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		height: '68%',
	},
});
