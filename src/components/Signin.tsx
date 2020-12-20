import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TextInput from './TextInput';
import { Feather } from '@expo/vector-icons';
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { validateSignin } from '../utils/validation';
import CircledButton from './CircledButton';
import { useLocalization } from '../context/Localization';
import useForm from '../hooks/useForm';

const Signin = () => {
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
		<View style={styles.container}>
			<View style={styles.inputGroup}>
				<TextInput
					placeholder={t('email')}
					value={values.email}
					icon={<Feather name='user' size={24} color='gray' />}
					onBlur={handleBlur('email')}
					onChangeText={handleChange('email')}
					touched={touched.email}
					error={errors.email}
				/>
				<TextInput
					placeholder={t('password')}
					value={values.password}
					icon={<Feather name='key' size={24} color='gray' />}
					onBlur={handleBlur('password')}
					onChangeText={handleChange('password')}
					touched={touched.password}
					error={errors.password}
					autoCorrect={false}
					secureTextEntry
				/>
			</View>

			<View style={styles.actions}>
				<View style={styles.rememberMe}>
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
					<TouchableOpacity onPress={handleCheckbox('rememberMe')}>
						<Text style={{ color: 'gray' }}>{t('rememberMe')}</Text>
					</TouchableOpacity>
				</View>

				<TouchableOpacity>
					<Text style={{ color: 'blue' }}>{t('forgotPass')}</Text>
				</TouchableOpacity>
			</View>

			<CircledButton handleSubmit={done(handleSubmit)} />
		</View>
	);
};

export default Signin;

const styles = StyleSheet.create({
	container: {
		height: '100%',
		position: 'relative',
	},
	inputGroup: {
		justifyContent: 'space-between',
	},
	actions: {
		marginTop: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	rememberMe: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});
