import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	TopBarBackground,
	TopBarCenter,
	TopBarLeft,
	TopBarRight,
} from '../../navigation/TopBar';
import HomeScreen from './Home';

const Stack = createStackNavigator();

function HomeStack() {
	return (
		<Stack.Navigator
			screenOptions={() => ({
				headerTitle: () => <TopBarCenter />,
				headerBackground: () => <TopBarBackground />,
				headerLeft: () => <TopBarLeft />,
				headerRight: () => <TopBarRight />,
			})}
		>
			<Stack.Screen name='Home' component={HomeScreen} />
		</Stack.Navigator>
	);
}

export default HomeStack;
