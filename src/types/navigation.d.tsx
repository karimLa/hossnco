import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
	Landing: undefined;
	Boarding: undefined;
};

type LandingNavigationProp = StackNavigationProp<RootStackParamList, 'Landing'>;

export type LandingProps = {
	navigation: LandingNavigationProp;
};
