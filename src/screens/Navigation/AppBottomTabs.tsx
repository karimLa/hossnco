import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { FeatherIcon } from '../../types/icons';
import HomeStack from '../Home';
import ActivityStack from '../Activity';
import SettingsStack from '../Settings';
import ArchiveStack from '../Archive';
import ContactStack from '../Contact';

const Tab = createBottomTabNavigator();

function AppBottomTabs() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName: FeatherIcon;

					switch (route.name) {
						case 'Home':
							iconName = focused ? 'home' : 'home';
							break;
						case 'Activity':
							iconName = focused ? 'activity' : 'activity';
							break;
						case 'Settings':
							iconName = focused ? 'user' : 'user';
							break;
						case 'Archive':
							iconName = focused ? 'archive' : 'archive';
							break;
						case 'Contact':
							iconName = focused ? 'shopping-bag' : 'shopping-bag';
							break;

						default:
							break;
					}

					// @ts-ignore
					return <Feather name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
			}}
		>
			<Tab.Screen name='Home' component={HomeStack} />
			<Tab.Screen name='Activity' component={ActivityStack} />
			<Tab.Screen name='Settings' component={SettingsStack} />
			<Tab.Screen name='Archive' component={ArchiveStack} />
			<Tab.Screen name='Contact' component={ContactStack} />
		</Tab.Navigator>
	);
}

export default AppBottomTabs;
