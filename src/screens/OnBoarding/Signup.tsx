import React from 'react';
import { useLocalization } from '../../context/Localization';
import { validateSignup } from '../../utils/validation';
import useForm from '../../hooks/useForm';
import Box from '../../components/Box';
import Text from '../../components/Text';
import TextInput from '../../components/TextInput';
import CircledButton from '../../components/CircledButton';

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
				bottom={-30}
				left='50%'
				style={{ transform: [{ translateX: -40 }] }}
				onPress={done(handleSubmit)}
			/>

			<Box justifyContent='center' alignItems='center'>
				<Text fontSize={12} color='textGrey'>
					{t('byPressing')}
				</Text>
				<Text fontSize={12} color='textGrey'>
					{t('terms')}
				</Text>
			</Box>
		</Box>
	);
};

export default Signup;
