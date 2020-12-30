import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
	Landing: undefined;
	OnBoarding: undefined;
	Tabs: undefined;
};

export type LandingProps = {
	navigation: StackNavigationProp<RootStackParamList, 'Landing'>;
};
