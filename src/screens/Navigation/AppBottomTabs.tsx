import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import HomeStack from '../Home';
import ActivityStack from '../Activity';
import SettingsStack from '../Settings';
import ArchiveStack from '../Archive';
import ContactStack from '../Contact';
import Box from '../../components/Box';
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
