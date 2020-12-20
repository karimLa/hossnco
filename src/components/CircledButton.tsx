import React from 'react';
import {
	StyleProp,
	StyleSheet,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
	ViewStyle,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface Props extends TouchableOpacityProps {
	handleSubmit: () => void;
	style?: StyleProp<ViewStyle>;
}

const CircledButton: React.VFC<Props> = ({ handleSubmit, style, ...props }) => {
	return (
		<View style={[styles.outerCircle, style]}>
			<TouchableOpacity activeOpacity={0.6} onPress={handleSubmit} {...props}>
				<LinearGradient
					colors={['#453dcb', '#00d4ff']}
					end={{ y: 0.99, x: 0.99 }}
					style={styles.innerCircle}
				>
					<Feather name='arrow-right' size={45} color='white' />
				</LinearGradient>
			</TouchableOpacity>
		</View>
	);
};

CircledButton.defaultProps = {
	style: {
		position: 'absolute',
		left: '50%',
		transform: [{ translateX: -45 }],
	},
};

export default CircledButton;

const styles = StyleSheet.create({
	outerCircle: {
		bottom: -45,
		width: 90,
		height: 90,
		borderRadius: 90,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
	},
	innerCircle: {
		backgroundColor: 'lightblue',
		width: 75,
		height: 75,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 75,
	},
});
