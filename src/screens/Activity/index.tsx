import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	TopBarBackground,
	TopBarCenter,
	TopBarLeft,
	TopBarRight,
} from '../../navigation/TopBar';
import ActivityScreen from './Activity';

const Stack = createStackNavigator();

function ActivityStack() {
	return (
		<Stack.Navigator
			screenOptions={() => ({
				headerTitle: () => <TopBarCenter />,
				headerBackground: () => <TopBarBackground />,
				headerLeft: () => <TopBarLeft />,
				headerRight: () => <TopBarRight />,
			})}
		>
			<Stack.Screen name='Activity' component={ActivityScreen} />
		</Stack.Navigator>
	);
}

export default ActivityStack;
