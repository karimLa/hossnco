import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import Box from '../../components/Box';
import useTheme from '../../hooks/useTheme';
import { TextInput, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export function TopBarBackground() {
	const { colors } = useTheme();
	return (
		<LinearGradient
			style={{
				width: '100%',
				height: '100%',
				justifyContent: 'center',
			}}
			colors={[colors.gradientStart, colors.gradientEnd]}
			start={{ x: 0.1, y: 0.2 }}
			end={{ y: 0.8, x: 0.9 }}
		></LinearGradient>
	);
}

export function TopBarCenter() {
	const { colors } = useTheme();
	return (
		<Box
			paddingHorizontal='base'
			flex={1}
			justifyContent='center'
			alignContent='center'
		>
			<TextInput
				style={{
					backgroundColor: colors.textWhite,
					paddingVertical: 5,
					paddingHorizontal: 10,
					borderRadius: 15,
				}}
				placeholder='Search'
			/>
		</Box>
	);
}

export function TopBarLeft() {
	const { dispatch } = useNavigation();
	const { colors } = useTheme();
	return (
		<TouchableOpacity onPress={() => dispatch(DrawerActions.toggleDrawer())}>
			<Box
				paddingHorizontal='base'
				height='100%'
				justifyContent='center'
				alignContent='center'
			>
				<Feather name='align-left' size={25} color={colors.textWhite} />
			</Box>
		</TouchableOpacity>
	);
}

export function TopBarRight() {
	const { colors } = useTheme();
	return (
		<Box
			paddingHorizontal='base'
			height='100%'
			justifyContent='center'
			alignContent='center'
		>
			<Feather name='message-square' size={25} color={colors.textWhite} />
		</Box>
	);
}
