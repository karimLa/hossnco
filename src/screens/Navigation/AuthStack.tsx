import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../Landing';
import OnBoardingScreen from '../OnBoarding';
import { IUser } from '../../context/User';
import {
	TopBarBackground,
	TopBarCenter,
	TopBarLeft,
	TopBarRight,
} from './TopBar';
import AppDrawer from './AppDrawer';

const Stack = createStackNavigator();

interface Props {
	user: IUser | undefined;
}

function AuthStack({ user }: Props) {
	return (
		<>
			{!user ? (
				<Stack.Navigator>
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
			) : (
				<AppDrawer />
			)}
		</>
	);
}

export default AuthStack;
