import React from 'react';
import LocalizationContainer from './src/context/Localization';
import LandingScreen from './src/screens/LandingScreen';

export default function App() {
	return (
		<LocalizationContainer>
			<LandingScreen />
		</LocalizationContainer>
	);
}
