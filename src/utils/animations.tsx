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
	<Transition.Sequence>
		<Transition.Out type={type} />
		<Transition.Change interpolation='easeInOut' />
		<Transition.In type={type} />
	</Transition.Sequence>
);
