import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import ButtonOpacity from './ButtonOpacity';
import useTheme from '../context/useTheme';
import type { ButtonOpacityProps } from './ButtonOpacity';
interface Props extends ButtonOpacityProps {
	iconName?: string;
}

const CircledButton: React.FC<Props> = ({ children, iconName, ...props }) => {
	const { colors } = useTheme();

	return (
		<ButtonOpacity
			width={80}
			height={80}
			borderRadius={40}
			justifyContent='center'
			alignItems='center'
			backgroundColor='mainBackground'
			{...props}
		>
			{children ? (
				children
			) : (
				<LinearGradient
					colors={[colors.gradientStart, colors.gradientEnd]}
					end={{ x: 0.99, y: 0.99 }}
					style={styles.innerCircle}
				>
					<Feather name={iconName!} size={45} color='white' />
				</LinearGradient>
			)}
		</ButtonOpacity>
	);
};

CircledButton.defaultProps = {
	iconName: 'arrow-right',
};

export default CircledButton;

const styles = StyleSheet.create({
	innerCircle: {
		width: 70,
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 35,
	},
});
