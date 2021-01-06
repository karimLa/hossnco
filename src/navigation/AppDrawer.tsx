import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppBottomTabs from './AppBottomTabs';
import AppDrawerContent from './AppDrawerContent';
import NotificationsScreen from '../screens/Notifications/Notifications';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
	return (
		<Drawer.Navigator
			drawerStyle={{ width: '100%' }}
			drawerContent={(props) => <AppDrawerContent {...props} />}
		>
			<Drawer.Screen name='Home' component={AppBottomTabs} />
			<Drawer.Screen name='Notifications' component={NotificationsScreen} />
		</Drawer.Navigator>
	);
}
