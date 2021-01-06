import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import HomeStack from '../screens/Home';
import ActivityStack from '../screens/Activity';
import SettingsStack from '../screens/Settings';
import ArchiveStack from '../screens/Archive';
import ContactStack from '../screens/Contact';
import Box from '../components/Box';
import AppBottomTabBar from './AppBottomTapBar';

const Tab = createBottomTabNavigator();

function AppBottomTabs() {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<Box flex={1}>
				<Tab.Navigator tabBar={(props) => <AppBottomTabBar {...props} />}>
					<Tab.Screen name='Home' component={HomeStack} />
					<Tab.Screen name='Activity' component={ActivityStack} />
					<Tab.Screen name='Settings' component={SettingsStack} />
					<Tab.Screen name='Archive' component={ArchiveStack} />
					<Tab.Screen name='Contact' component={ContactStack} />
				</Tab.Navigator>
			</Box>
		</TouchableWithoutFeedback>
	);
}

export default AppBottomTabs;
