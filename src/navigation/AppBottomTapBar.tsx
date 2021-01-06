import React from 'react';
import {
	BottomTabBarOptions,
	BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MCIcons } from '../types/icons';
import useTheme from '../hooks/useTheme';
import Box from '../components/Box';
import ButtonOpacity from '../components/ButtonOpacity';

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

				let iconName: MCIcons;

				switch (route.name) {
					case 'Home':
						iconName = isFocused ? 'home' : 'home-outline';
						break;
					case 'Activity':
						iconName = isFocused ? 'bell' : 'bell-outline';
						break;
					case 'Settings':
						iconName = isFocused ? 'account' : 'account-outline';
						break;
					case 'Archive':
						iconName = isFocused ? 'zip-box' : 'zip-box-outline';
						break;
					case 'Contact':
						iconName = isFocused ? 'shopping' : 'shopping-outline';
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
							zIndex={1}
							style={{ transform: [{ scale: 1.25 }] }}
						>
							<MaterialCommunityIcons
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
							<MaterialCommunityIcons
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
