import React from 'react';
import { StyleSheet, View, TextInput as Input } from 'react-native';

interface Props {
	placeholder: string;
	autoCorrect?: boolean;
	icon?: any;
	type?: 'input' | 'password';
}

const TextInput: React.VFC<Props> = ({
	placeholder,
	autoCorrect,
	icon,
	type,
}) => {
	return (
		<View style={styles.textInputContainer}>
			{icon && icon}
			<Input
				style={styles.textInput}
				placeholder={placeholder}
				autoCorrect={autoCorrect}
				secureTextEntry={type === 'password' ? true : false}
			/>
		</View>
	);
};

TextInput.defaultProps = {
	autoCorrect: true,
	type: 'input',
};

export default TextInput;

const styles = StyleSheet.create({
	textInputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'lightblue',
		borderRadius: 15,
		paddingHorizontal: 15,
	},
	textInput: {
		flex: 1,
		paddingVertical: 10,
		paddingLeft: 5,
	},
});
