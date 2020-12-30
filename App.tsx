import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import theme from './src/constants/theme';
import LocalizationProvider from './src/context/Localization';
import UserProvider from './src/context/User';
import Scafold from './src/screens';

export default function App() {
	return (
		<LocalizationProvider>
			<ThemeProvider theme={theme}>
				<UserProvider>
					<Scafold />
				</UserProvider>
			</ThemeProvider>
		</LocalizationProvider>
	);
}
