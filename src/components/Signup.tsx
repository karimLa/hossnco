import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInput from './TextInput';
import { Feather } from '@expo/vector-icons';
import { validateSignup } from '../utils/validation';
import CircledButton from './CircledButton';
import { useLocalization } from '../context/Localization';
import useForm from '../hooks/useForm';

const Signup = () => {
	const { t } = useLocalization();
	const { values, touched, errors, handleChange, handleBlur, done } = useForm(
		{ email: '', password: '', username: '' },
		validateSignup
	);

	const handleSubmit = () => {
		console.log(values);
	};

	return (
		<View style={styles.container}>
			<View style={styles.inputGroup}>
				<TextInput
					placeholder={t('username')}
					value={values.username}
					icon={<Feather name='user' size={24} color='gray' />}
					touched={touched.username}
					onChangeText={handleChange('username')}
					onBlur={handleBlur('username')}
					error={errors.username}
				/>
				<TextInput
					placeholder={t('email')}
					value={values.email}
					icon={<Feather name='user' size={24} color='gray' />}
					touched={touched.email}
					onChangeText={handleChange('email')}
					onBlur={handleBlur('email')}
					error={errors.email}
				/>
				<TextInput
					placeholder={t('password')}
					value={values.password}
					autoCorrect={false}
					secureTextEntry
					icon={<Feather name='key' size={24} color='gray' />}
					touched={touched.password}
					onChangeText={handleChange('password')}
					onBlur={handleBlur('password')}
					error={errors.password}
				/>
			</View>

			<CircledButton handleSubmit={done(handleSubmit)} />

			<View
				style={{
					marginTop: 15,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text style={{ color: 'gray' }}>{t('byPressing')}</Text>
				<Text style={{ color: 'blue' }}>{t('terms')}</Text>
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
