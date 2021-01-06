import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	TopBarBackground,
	TopBarCenter,
	TopBarLeft,
	TopBarRight,
} from '../../navigation/TopBar';
import ContactScreen from './Contact';

const Stack = createStackNavigator();

function ContactStack() {
	return (
		<Stack.Navigator
			screenOptions={() => ({
				headerTitle: () => <TopBarCenter />,
				headerBackground: () => <TopBarBackground />,
				headerLeft: () => <TopBarLeft />,
				headerRight: () => <TopBarRight />,
			})}
		>
			<Stack.Screen name='Contact' component={ContactScreen} />
		</Stack.Navigator>
	);
}

export default ContactStack;
