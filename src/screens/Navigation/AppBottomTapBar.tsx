import React from 'react';
import {
	BottomTabBarOptions,
	BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import useTheme from '../../hooks/useTheme';
import { FeatherIcon } from '../../types/icons';
import Box from '../../components/Box';
import ButtonOpacity from '../../components/ButtonOpacity';

type Props = BottomTabBarProps<BottomTabBarOptions>;

function AppBottomTabBar({ state, descriptors, navigation }: Props) {
	const { colors } = useTheme();
	const focusedOptions = descriptors[state.routes[state.index].key].options;

	if (focusedOptions.tabBarVisible === false) {
		return null;
	}

	return (
		<Box
			flexDirection='row'
			bg='textWhite'
			borderTopWidth={1}
			borderTopColor='textGrey'
		>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					});
				};

				let iconName: FeatherIcon;

				switch (route.name) {
					case 'Home':
						iconName = isFocused ? 'home' : 'home';
						break;
					case 'Activity':
						iconName = isFocused ? 'bell' : 'bell';
						break;
					case 'Settings':
						iconName = isFocused ? 'user' : 'user';
						break;
					case 'Archive':
						iconName = isFocused ? 'archive' : 'archive';
						break;
					case 'Contact':
						iconName = isFocused ? 'shopping-bag' : 'shopping-bag';
						break;

					default:
						break;
				}

				// Get middle item
				if (Math.floor(state.routes.length / 2) == index) {
					return (
						<ButtonOpacity
							key={route.key}
							accessibilityRole='button'
							accessibilityState={isFocused ? { selected: true } : {}}
							accessibilityLabel={options.tabBarAccessibilityLabel}
							testID={options.tabBarTestID}
							onPress={onPress}
							onLongPress={onLongPress}
							bg='textGrey'
							borderRadius={30}
							top={-15}
							width={60}
							height={60}
							justifyContent='center'
							alignItems='center'
						>
							<Feather
								// @ts-ignore
								name={iconName}
								size={30}
								color={colors.textBlack}
							/>
						</ButtonOpacity>
					);
				} else {
					return (
						<ButtonOpacity
							key={route.key}
							accessibilityRole='button'
							accessibilityState={isFocused ? { selected: true } : {}}
							accessibilityLabel={options.tabBarAccessibilityLabel}
							testID={options.tabBarTestID}
							onPress={onPress}
							onLongPress={onLongPress}
							flex={1}
							justifyContent='center'
							alignItems='center'
						>
							<Feather
								// @ts-ignore
								name={iconName}
								size={24}
								color={colors.textBlack}
							/>
						</ButtonOpacity>
					);
				}
			})}
		</Box>
	);
}

export default AppBottomTabBar;
