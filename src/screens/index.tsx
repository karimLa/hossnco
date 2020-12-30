import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import usePreload from '../hooks/usePreload';
import LandingScreen from './Landing';
import OnBoardingScreen from './OnBoarding';
import HomeScreen from './Home';

const Stack = createStackNavigator();

function Scafold() {
	const { user, isReady } = usePreload();

	if (!isReady) {
		return <AppLoading />;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{!user ? (
					<>
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
					</>
				) : (
					<>
						<Stack.Screen name='Home' component={HomeScreen} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Scafold;
