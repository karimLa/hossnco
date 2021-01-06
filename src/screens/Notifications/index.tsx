import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Notifications from './Notifications';

const Stack = createStackNavigator();

function SettingsStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Notifications' component={Notifications} />
		</Stack.Navigator>
	);
}

export default SettingsStack;
