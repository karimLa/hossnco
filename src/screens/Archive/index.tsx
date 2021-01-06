import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	TopBarBackground,
	TopBarCenter,
	TopBarLeft,
	TopBarRight,
} from '../../navigation/TopBar';
import ArchiveScreen from './Archive';

const Stack = createStackNavigator();

function ArchiveStack() {
	return (
		<Stack.Navigator
			screenOptions={() => ({
				headerTitle: () => <TopBarCenter />,
				headerBackground: () => <TopBarBackground />,
				headerLeft: () => <TopBarLeft />,
				headerRight: () => <TopBarRight />,
			})}
		>
			<Stack.Screen name='Archive' component={ArchiveScreen} />
		</Stack.Navigator>
	);
}

export default ArchiveStack;
