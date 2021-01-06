import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	TopBarBackground,
	TopBarCenter,
	TopBarLeft,
	TopBarRight,
} from '../../navigation/TopBar';
import SettingsScreen from './Settings';

const Stack = createStackNavigator();

function SettingsStack() {
	return (
		<Stack.Navigator
			screenOptions={() => ({
				headerTitle: () => <TopBarCenter />,
				headerBackground: () => <TopBarBackground />,
				headerLeft: () => <TopBarLeft />,
				headerRight: () => <TopBarRight />,
			})}
		>
			<Stack.Screen name='Settings' component={SettingsScreen} />
		</Stack.Navigator>
	);
}

export default SettingsStack;
