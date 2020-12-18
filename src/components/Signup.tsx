import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TextInput from './TextInput';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Signup = () => {
	const [input, setInput] = useState({
		username: '',
		email: '',
		password: '',
	});

	return (
		<View style={styles.container}>
			<View style={styles.inputGroup}>
				<TextInput
					placeholder='Username'
					name='username'
					value={input.username}
					onChangeText={(text) => setInput({ ...input, username: text })}
					icon={<Feather name='user' size={24} color='gray' />}
				/>
				<TextInput
					placeholder='Email Address'
					name='email'
					value={input.email}
					onChangeText={(text) => setInput({ ...input, email: text })}
					icon={<Feather name='user' size={24} color='gray' />}
				/>
				<TextInput
					placeholder='Password'
					name='password'
					value={input.password}
					onChangeText={(text) => setInput({ ...input, password: text })}
					autoCorrect={false}
					secureTextEntry
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
	);
};

export default Signup;

const styles = StyleSheet.create({
	container: {
		height: '100%',
		position: 'relative',
	},
	inputGroup: {
		justifyContent: 'space-between',
	},
});
