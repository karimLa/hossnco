import React from 'react';
import {
	DrawerContentComponentProps,
	DrawerContentOptions,
	DrawerContentScrollView,
	DrawerItem,
} from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import { useUser } from '../context/User';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonOpacity from '../components/ButtonOpacity';
import Box from '../components/Box';
import Text from '../components/Text';
import useTheme from '../hooks/useTheme';

type DrawerProps = DrawerContentComponentProps<DrawerContentOptions>;

function AppDrawerContent({ navigation, ...props }: DrawerProps) {
	const { colors } = useTheme();
	const { user, removeUser } = useUser();
	const items = [
		{ label: 'Home', iconName: 'home', screen: 'Home' },
		{ label: 'Services', iconName: 'bar-chart', screen: 'Home' },
		{ label: 'Sectors', iconName: 'send', screen: 'Home' },
		{ label: 'My Account', iconName: 'user', screen: 'Home' },
		{ label: 'Settings', iconName: 'settings', screen: 'Settings' },
	];

	return (
		<LinearGradient
			colors={[colors.gradientStart, colors.gradientEnd]}
			start={{ x: 0.1, y: 0.4 }}
			end={{ x: 0.2, y: 1 }}
			style={{ flex: 1 }}
		>
			<DrawerContentScrollView {...props}>
				<ButtonOpacity
					mt='xs'
					ml='base'
					mb='base'
					bg='textWhite'
					justifyContent='center'
					alignItems='center'
					width={40}
					height={40}
					borderRadius={20}
					onPress={navigation.closeDrawer}
				>
					<Feather name='arrow-left' size={30} color={colors.textBlack} />
				</ButtonOpacity>

				<Box mt='xl' ml='xl' flexDirection='row' alignItems='center'>
					<Box
						backgroundColor='textWhite'
						justifyContent='center'
						alignItems='center'
						width={70}
						height={70}
						borderRadius={35}
						elevation={0.6}
					>
						<Feather name='user' size={40} color={colors.textGrey} />
					</Box>
					<Text ml='lg' color='textWhite' fontSize={25} numberOfLines={1}>
						{user?.username}
					</Text>
				</Box>
				<Box pl='xl' minHeight={500} justifyContent='space-evenly'>
					{items.map(({ label, iconName, screen }) => (
						<DrawerItem
							key={label}
							label={label}
							inactiveTintColor={colors.textWhite}
							labelStyle={{ marginLeft: -15, fontSize: 18 }}
							icon={() => (
								// @ts-ignore
								<Feather name={iconName} size={22} color={colors.textWhite} />
							)}
							onPress={() => {
								navigation.navigate(screen);
							}}
						/>
					))}
					<DrawerItem
						label='Log Out'
						inactiveTintColor={colors.textWhite}
						style={{ marginLeft: -5, marginTop: 10 }}
						labelStyle={{ marginLeft: -15, fontSize: 18 }}
						icon={() => (
							<Feather name='log-out' size={22} color={colors.textWhite} />
						)}
						onPress={removeUser}
					/>
				</Box>
			</DrawerContentScrollView>
		</LinearGradient>
	);
}

export default AppDrawerContent;
