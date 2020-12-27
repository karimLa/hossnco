import React, { ComponentProps } from 'react';
import { TextInput as Input, TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ColorProps, createBox } from '@shopify/restyle';
import { Theme } from '../constants/theme';
import Box from './Box';
import Text from './Text';
import useTheme from '../context/useTheme';

const BaseInput = createBox<Theme, TextInputProps>(Input);

type Props = ComponentProps<typeof BaseInput> &
	ColorProps<Theme> & {
		icon?: string;
		iconSize?: number;
		iconColor?: keyof Theme['colors'];
		touched?: boolean;
		error?: string;
	};

const TextInput: React.VFC<Props> = ({
	icon,
	iconSize,
	iconColor,
	touched,
	error,
	...props
}) => {
	const { colors } = useTheme();
	const borderColor =
		touched && !error ? 'textSuccess' : error ? 'textError' : 'gradientEnd';

	return (
		<Box marginBottom='sm'>
			<Box
				flexDirection='row'
				alignItems='center'
				borderWidth={1}
				borderRadius={15}
				paddingHorizontal='md'
				borderColor={borderColor}
			>
				{icon && (
					<Feather
						name={icon}
						size={iconSize}
						color={colors[iconColor || 'iconColor']}
					/>
				)}
				<BaseInput
					flex={1}
					paddingVertical='base'
					paddingLeft='sm'
					{...props}
				/>
			</Box>

			{error && error.length > 0 ? (
				<Text variant='textError' marginTop='xs' marginLeft='sm'>
					{error}
				</Text>
			) : null}
		</Box>
	);
};

TextInput.defaultProps = {
	iconSize: 25,
};

export default TextInput;
