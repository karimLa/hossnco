import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../Landing';
import OnBoardingScreen from '../OnBoarding';
import { IUser } from '../../context/User';
import AppDrawer from './AppDrawer';

const Stack = createStackNavigator();

interface Props {
	user: IUser | undefined;
}

function AuthStack({ user }: Props) {
	const hideHeader = { headerShown: false };
	return (
		<Stack.Navigator>
			{!user ? (
				<>
					<Stack.Screen
						options={hideHeader}
						name='Landing'
						component={LandingScreen}
					/>
					<Stack.Screen
						options={hideHeader}
						name='OnBoarding'
						component={OnBoardingScreen}
					/>
				</>
			) : (
				<Stack.Screen options={hideHeader} name='Home' component={AppDrawer} />
			)}
		</Stack.Navigator>
	);
}

export default AuthStack;
