import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import usePreload from '../hooks/usePreload';
import AuthStack from '../navigation/AuthStack';

function Scafold() {
	const { user, isReady } = usePreload();

	if (!isReady) {
		return <AppLoading />;
	}

	return (
		<NavigationContainer>
			<AuthStack user={user} />
		</NavigationContainer>
	);
}

export default Scafold;
