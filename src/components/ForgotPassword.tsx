import React from 'react';
import { useLocalization } from '../context/Localization';
import Box from './Box';
import CircledButton from './CircledButton';
import TextInput from './TextInput';
import useForm from '../hooks/useForm';
import { validateEmail } from '../utils/validation';
import Text from './Text';

interface Props {
	toggleForgotPassword: () => void;
}

const ForgotPassword: React.VFC<Props> = ({ toggleForgotPassword }) => {
	const { t } = useLocalization();
	const { values, touched, errors, handleChange, handleBlur, done } = useForm(
		{ email: '' },
		validateEmail
	);

	const handleSubmit = () => {
		console.log('done:', values);
	};

	return (
		<Box position='relative' height='100%'>
			<TextInput
				placeholder={t('email')}
				value={values.email}
				icon='user'
				onBlur={handleBlur('email')}
				onChangeText={handleChange('email')}
				touched={touched.email}
				error={errors.email}
			/>
			<CircledButton
				position='absolute'
				bottom={-40}
				left='50%'
				style={{ transform: [{ translateX: -40 }] }}
				onPress={done(handleSubmit)}
			/>
			<Text fontSize={12} marginTop='xs' textAlign='center'>
				{t('onBoarding.alreadyHaveAccount')}
				<Text color='gradientStart' onPress={toggleForgotPassword}>
					{t('onBoarding.signin')}
				</Text>
			</Text>
		</Box>
	);
};

export default ForgotPassword;
