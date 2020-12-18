import React, { useRef } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput as Input,
	TextInputProps,
	StyleProp,
	ViewStyle,
} from 'react-native';
import { Transitioning, TransitioningView } from 'react-native-reanimated';
import { Slide } from '../utils/animations';

interface Props extends TextInputProps {
	icon?: any;
	name: string;
	boxStyles?: StyleProp<ViewStyle>;
	touched: any;
	errors: any;
}

const TextInput: React.VFC<Props> = ({
	icon,
	boxStyles,
	touched,
	errors,
	name,
	...props
}) => {
	const errorRef = useRef<TransitioningView>();

	return (
		<View style={boxStyles}>
			<View
				style={[
					styles.textInputBox,
					{ borderColor: touched[name] && errors[name] ? 'red' : 'lightblue' },
				]}
			>
				{icon && icon}
				<Input style={styles.textInput} {...props} />
			</View>
			<Transitioning.View ref={errorRef} transition={<Slide type='scale' />}>
				{touched[name] && errors[name] && (
					<Text style={styles.error}>{errors[name]}</Text>
				)}
			</Transitioning.View>
		</View>
	);
};

TextInput.defaultProps = {
	boxStyles: {},
	touched: {},
	errors: {},
	boxStyles: {
		marginBottom: 15
	}
};

export default TextInput;

const styles = StyleSheet.create({
	textInputBox: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 15,
		paddingHorizontal: 15,
	},
	textInput: {
		flex: 1,
		paddingVertical: 10,
		paddingLeft: 5,
	},
	error: {
		fontSize: 12,
		color: 'red',
		marginLeft: 6,
		marginTop: 2,
	},
});
