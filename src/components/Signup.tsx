import React from 'react';
import TextInput from './TextInput';
import { validateSignup } from '../utils/validation';
import CircledButton from './CircledButton';
import { useLocalization } from '../context/Localization';
import useForm from '../hooks/useForm';
import Text from './Text';
import Box from './Box';

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
		<Box position='relative' height='100%'>
			<TextInput
				placeholder={t('username')}
				value={values.username}
				icon='user'
				touched={touched.username}
				onChangeText={handleChange('username')}
				onBlur={handleBlur('username')}
				error={errors.username}
			/>
			<TextInput
				placeholder={t('email')}
				value={values.email}
				icon='user'
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
				icon='key'
				touched={touched.password}
				onChangeText={handleChange('password')}
				onBlur={handleBlur('password')}
				error={errors.password}
			/>

			<CircledButton
				position='absolute'
				bottom={-40}
				left='50%'
				style={{ transform: [{ translateX: -40 }] }}
				onPress={done(handleSubmit)}
			/>

			<Box marginTop='sm' justifyContent='center' alignItems='center'>
				<Text color='textGrey'>{t('byPressing')}</Text>
				<Text color='textGrey'>{t('terms')}</Text>
			</Box>
		</Box>
	);
};

export default Signup;
