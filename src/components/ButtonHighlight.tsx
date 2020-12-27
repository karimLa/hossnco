import React, { ComponentProps } from 'react';
import { TouchableHighlight, TouchableHighlightProps } from 'react-native';
import { ColorProps, createBox } from '@shopify/restyle';
import { Theme } from '../constants/theme';
import Text from './Text';
import useTheme from '../context/useTheme';

const BaseButton = createBox<Theme, TouchableHighlightProps>(
	TouchableHighlight
);

type Props = ComponentProps<typeof BaseButton> &
	ColorProps<Theme> & {
		text: string;
		index?: number;
		selectedIndex?: number;
		bgHighlight: keyof Theme['colors'];
		colorHighlight?: keyof Theme['colors'];
	};

function ButtonHighlight({
	text,
	index,
	selectedIndex,
	bgHighlight,
	backgroundColor,
	color,
	colorHighlight,
	...props
}: Props) {
	const theme = useTheme();
	const textColor = selectedIndex === index ? color : colorHighlight;
	const bgColor = selectedIndex == index ? bgHighlight : backgroundColor;

	return (
		<BaseButton
			underlayColor={theme.colors[bgHighlight]}
			backgroundColor={bgColor}
			borderWidth={1}
			borderRadius={10}
			paddingVertical='md'
			paddingHorizontal='base'
			alignItems='center'
			{...props}
		>
			<Text variant='textButton' color={textColor}>
				{text}
			</Text>
		</BaseButton>
	);
}

ButtonHighlight.defaultProps = {
	selectedIndex: -1,
	index: 0,
	backgroundColor: 'mainBackground',
	bgHighlight: 'gradientStart',
	color: 'textWhite',
	colorHighlight: 'textBlack',
};

export default ButtonHighlight;
