import React from 'react';
import {
	createDrawerNavigator,
	DrawerContentComponentProps,
	DrawerContentOptions,
	DrawerItem,
} from '@react-navigation/drawer';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Feather, Ionicons } from '@expo/vector-icons';
import AppBottomTabs from './AppBottomTabs';
import useTheme from '../../hooks/useTheme';
import { Theme } from '../../constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import Box from '../../components/Box';
import { IUser, useUser } from '../../context/User';
import Text from '../../components/Text';
import ButtonOpacity from '../../components/ButtonOpacity';

const Drawer = createDrawerNavigator();

type DrawerProps = {
	drawerOptions: DrawerContentComponentProps<DrawerContentOptions>;
	theme: Theme;
	user: IUser;
};

function CustomDrawerContent({ drawerOptions, theme, user }: DrawerProps) {
	const { colors } = theme;
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
			style={{ width: '100%', height: '100%' }}
		>
			<ButtonOpacity
				mt='xxl'
				ml='lg'
				mb='base'
				bg='textWhite'
				justifyContent='center'
				alignItems='center'
				width={50}
				height={50}
				borderRadius={25}
				onPress={drawerOptions.navigation.closeDrawer}
			>
				<Feather name='arrow-left' size={30} color={colors.textBlack} />
			</ButtonOpacity>

			<Box mt='xxl' ml='xl' flexDirection='row' alignItems='center'>
				<Box
					backgroundColor='textWhite'
					justifyContent='center'
					alignItems='center'
					width={80}
					height={80}
					borderRadius={40}
					elevation={0.6}
				>
					<Feather name='user' size={40} color={colors.textGrey} />
				</Box>
				<Text ml='lg' color='textWhite' fontSize={25} numberOfLines={1}>
					{user.username}
				</Text>
			</Box>

			<DrawerContentScrollView {...drawerOptions}>
				<Box pl='xxl' minHeight={500} justifyContent='space-evenly'>
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
								drawerOptions.navigation.navigate(screen);
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
						onPress={() => {
							drawerOptions.navigation.navigate('Settings');
						}}
					/>
				</Box>
			</DrawerContentScrollView>
		</LinearGradient>
	);
}

export default function AppDrawer() {
	const theme = useTheme();
	const { user } = useUser();

	return (
		<Drawer.Navigator
			drawerStyle={{ width: '100%' }}
			drawerContent={(props) => (
				<CustomDrawerContent drawerOptions={props} theme={theme} user={user!} />
			)}
		>
			<Drawer.Screen name='Drawer' component={AppBottomTabs} />
		</Drawer.Navigator>
	);
}
