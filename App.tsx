import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LocalizationContainer from './src/context/Localization';
import { LandingScreen, BoardingScreen } from './src/screens';

const Stack = createStackNavigator();

export default function App() {
	return (
		<LocalizationContainer>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Landing'>
					<Stack.Screen
						options={{ headerShown: false }}
						name='Landing'
						component={LandingScreen}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name='Boarding'
						component={BoardingScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</LocalizationContainer>
	);
}
