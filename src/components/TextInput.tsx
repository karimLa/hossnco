import React, { ComponentProps } from 'react';
import { TextInput as Input, TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ColorProps, createBox } from '@shopify/restyle';
import { Theme } from '../constants/theme';
import Box from './Box';
import Text from './Text';
import useTheme from '../hooks/useTheme';
import { FeatherIcon } from '../types/icons';

const BaseInput = createBox<Theme, TextInputProps>(Input);

type Props = ComponentProps<typeof BaseInput> &
	ColorProps<Theme> & {
		icon?: FeatherIcon;
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
	const invalid = error && error.length > 0;

	return (
		<Box marginBottom={invalid ? 'xs' : 'base'}>
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
						// @ts-ignore
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

			{invalid ? (
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
