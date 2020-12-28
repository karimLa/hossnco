import React from 'react';
import { useLocalization } from '../../context/Localization';
import Box from '../../components/Box';
import CircledButton from '../../components/CircledButton';
import TextInput from '../../components/TextInput';
import useForm from '../../hooks/useForm';
import { validateEmail } from '../../utils/validation';
import Text from '../../components/Text';

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
				bottom={-30}
				left='50%'
				style={{ transform: [{ translateX: -40 }] }}
				onPress={done(handleSubmit)}
			/>
			<Text fontSize={12} letterSpacing={0.4} marginTop='xs' textAlign='center'>
				{t('onBoarding.alreadyHaveAccount')}
			</Text>
			<Text
				color='gradientStart'
				textAlign='center'
				onPress={toggleForgotPassword}
			>
				{t('onBoarding.signin')}
			</Text>
		</Box>
	);
};

export default ForgotPassword;
