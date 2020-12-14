import React from 'react';
import { Transition } from 'react-native-reanimated';

interface Props {
	type?:
		| 'fade'
		| 'scale'
		| 'slide-top'
		| 'slide-bottom'
		| 'slide-right'
		| 'slide-left';
}

export const Slide: React.VFC<Props> = ({ type }) => (
	<Transition.Together>
		<Transition.In type={type} />
		<Transition.Change interpolation='easeInOut' />
		<Transition.Out type={type} />
	</Transition.Together>
);
