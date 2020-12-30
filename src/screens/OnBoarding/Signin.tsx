import React from 'react';
import { Alert, TouchableWithoutFeedback } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { validateSignin } from '../../utils/validation';
import { useLocalization } from '../../context/Localization';
import CircledButton from '../../components/CircledButton';
import Box from '../../components/Box';
import Text from '../../components/Text';
import TextInput from '../../components/TextInput';
import useForm from '../../hooks/useForm';
import ButtonOpacity from '../../components/ButtonOpacity';
import http from '../../utils/http';
import { IUser, useUser } from '../../context/User';

interface Props {
	toggleForgotPassword: () => void;
}

const Signin: React.VFC<Props> = ({ toggleForgotPassword }) => {
	const { t } = useLocalization();
	const { storeUser } = useUser();
	const {
		values,
		touched,
		errors,
		setErrors,
		handleChange,
		handleBlur,
		handleCheckbox,
		done,
	} = useForm({ email: '', password: '', rememberMe: false }, validateSignin);

	const handleSubmit = async () => {
		try {
			const { data } = await http.post('/user/login', values);
			const newUser: IUser = {
				email: data.user.email,
				username: data.user.username,
				token: data.token,
			};

			storeUser(newUser);
		} catch (err) {
			if (err.response) {
				const { data } = err.response;
				if (Array.isArray(data)) {
					setErrors({ ...errors, ...data[0] });
				} else {
					Alert.alert('Oops!', data.message);
				}
			}
		}
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
						<Text fontSize={12} color='textGrey'>
							{t('rememberMe')}
						</Text>
					</TouchableWithoutFeedback>
				</Box>

				<ButtonOpacity onPress={toggleForgotPassword}>
					<Text fontSize={12} color='gradientStart'>
						{t('forgotPass')}
					</Text>
				</ButtonOpacity>
			</Box>

			<CircledButton
				position='absolute'
				bottom={-30}
				left='50%'
				style={{ transform: [{ translateX: -40 }] }}
				onPress={done(handleSubmit)}
			/>
		</Box>
	);
};
export default Signin;
