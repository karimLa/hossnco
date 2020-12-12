import React, { useState } from 'react';
import { GestureResponderEvent, StyleSheet, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

interface Props {
	underlayColor?: string;
	pressedColor?: string;
	text: string;
	onPress?: ((event: GestureResponderEvent) => void) | undefined;
	index?: number;
	selectedIndex?: number;
}

const BtnPrimary: React.FC<Props> = ({
	underlayColor,
	text,
	pressedColor,
	onPress,
	index,
	selectedIndex,
}) => {
	const [pressed, setPressed] = useState(false);

	return (
		<TouchableHighlight
			underlayColor={underlayColor}
			onShowUnderlay={() => setPressed(true)}
			onHideUnderlay={() => setPressed(false)}
			style={[
				styles.langBtn,
				selectedIndex === index && { backgroundColor: underlayColor },
			]}
			onPress={onPress}
		>
			<Text
				style={[
					styles.langBtnText,
					!pressed ? { color: underlayColor } : { color: pressedColor },
					selectedIndex === index && { color: pressedColor },
				]}
			>
				{text}
			</Text>
		</TouchableHighlight>
	);
};

BtnPrimary.defaultProps = {
	underlayColor: 'blue',
	pressedColor: 'white',
	selectedIndex: -1,
	index: 0,
};

export default BtnPrimary;

const styles = StyleSheet.create({
	langBtn: {
		backgroundColor: 'white',
		borderColor: 'blue',
		fontSize: 20,
		borderWidth: 1,
		borderRadius: 10,
		marginTop: 25,
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	langBtnText: {
		fontSize: 18,
		alignSelf: 'center',
	},
});
