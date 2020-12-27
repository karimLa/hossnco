import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { validateSignin } from '../utils/validation';
import { useLocalization } from '../context/Localization';
import CircledButton from './CircledButton';
import Box from './Box';
import Text from './Text';
import TextInput from './TextInput';
import useForm from '../hooks/useForm';
import ButtonOpacity from './ButtonOpacity';

interface Props {
	toggleForgotPassword: () => void;
}

const Signin: React.VFC<Props> = ({ toggleForgotPassword }) => {
	const { t } = useLocalization();
	const {
		values,
		touched,
		errors,
		handleChange,
		handleBlur,
		handleCheckbox,
		done,
	} = useForm({ email: '', password: '', rememberMe: false }, validateSignin);

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
			<TextInput
				placeholder={t('password')}
				value={values.password}
				icon='key'
				onBlur={handleBlur('password')}
				onChangeText={handleChange('password')}
				touched={touched.password}
				error={errors.password}
				autoCorrect={false}
				secureTextEntry
			/>

			<Box
				marginTop='xs'
				flexDirection='row'
				alignItems='center'
				justifyContent='space-between'
			>
				<Box flexDirection='row' alignItems='center'>
					<CheckBox
						disabled={false}
						value={values.rememberMe}
						lineWidth={2}
						boxType={'circle'}
						animationDuration={0.5}
						onAnimationType={'bounce'}
						offAnimationType={'stroke'}
						onValueChange={handleCheckbox('rememberMe')}
					/>
					<TouchableWithoutFeedback onPress={handleCheckbox('rememberMe')}>
						<Text color='textGrey'>{t('rememberMe')}</Text>
					</TouchableWithoutFeedback>
				</Box>

				<ButtonOpacity onPress={toggleForgotPassword}>
					<Text color='gradientStart'>{t('forgotPass')}</Text>
				</ButtonOpacity>
			</Box>

			<CircledButton
				position='absolute'
				bottom={-40}
				left='50%'
				style={{ transform: [{ translateX: -40 }] }}
				onPress={done(handleSubmit)}
			/>
		</Box>
	);
};
export default Signin;
