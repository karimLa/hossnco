import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput as Input,
	TextInputProps,
	StyleProp,
	ViewStyle,
} from 'react-native';

interface Props extends TextInputProps {
	icon?: React.ReactNode;
	boxStyles?: StyleProp<ViewStyle>;
	touched?: boolean;
	error?: string;
}

const TextInput: React.VFC<Props> = ({
	icon,
	boxStyles,
	touched,
	error,
	...props
}) => {
	return (
		<View style={boxStyles}>
			<View
				style={[
					styles.textInputBox,
					{
						borderColor:
							touched && !error ? 'green' : error ? 'red' : 'lightblue',
					},
				]}
			>
				{icon && icon}
				<Input style={styles.textInput} {...props} />
			</View>

			{error && error.length > 0 ? (
				<Text style={styles.error}>{error}</Text>
			) : null}
		</View>
	);
};

TextInput.defaultProps = {
	boxStyles: {
		marginBottom: 15,
	},
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
