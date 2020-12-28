import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LocalizationProvider from './src/context/Localization';
import { LandingScreen, OnBoardingScreen } from './src/screens';
import { ThemeProvider } from '@shopify/restyle';
import theme from './src/constants/theme';

const Stack = createStackNavigator();

export default function App() {
	return (
		<LocalizationProvider>
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					<Stack.Navigator initialRouteName='Landing'>
						<Stack.Screen
							options={{ headerShown: false }}
							name='Landing'
							component={LandingScreen}
						/>
						<Stack.Screen
							options={{ headerShown: false }}
							name='OnBoarding'
							component={OnBoardingScreen}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</ThemeProvider>
		</LocalizationProvider>
	);
}
