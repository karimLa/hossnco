import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Transitioning, TransitioningView } from 'react-native-reanimated';
import { Slide } from '../utils/animations';
import Signup from './Signup';
import Signin from './Signin';
import { useLocalization } from '../context/Localization';
import Box from './Box';
import Text from './Text';

const BoardingForm = () => {
	const { t } = useLocalization();
	const tabOneRef = useRef<TransitioningView>();
	const tabTwoRef = useRef<TransitioningView>();

	const [showSignup, setShowSignup] = useState(false);

	return (
		<Box paddingHorizontal='xl'>
			<Box
				height={420}
				backgroundColor='textWhite'
				top={-60}
				paddingVertical='lg'
				paddingHorizontal='xxl'
				borderRadius={30}
				elevation={2}
			>
				<Box flexDirection='row' justifyContent='space-between'>
					<TouchableOpacity
						style={{ borderBottomWidth: !showSignup ? 1 : 0 }}
						onPress={() => {
							tabOneRef.current?.animateNextTransition();
							setShowSignup(false);
						}}
					>
						<Text paddingBottom='xs'>{t('signin')}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ borderBottomWidth: showSignup ? 1 : 0 }}
						onPress={() => {
							tabTwoRef.current?.animateNextTransition();
							setShowSignup(true);
						}}
					>
						<Text paddingBottom='xs'>{t('signup')}</Text>
					</TouchableOpacity>
				</Box>

				<Box marginTop='xl'>
					<Transitioning.View
						ref={tabOneRef}
						transition={<Slide type='scale' />}
					>
						{!showSignup && <Signin />}
					</Transitioning.View>

					<Transitioning.View
						ref={tabTwoRef}
						transition={<Slide type='fade' />}
					>
						{showSignup && <Signup />}
					</Transitioning.View>
				</Box>
			</Box>
		</Box>
	);
};

export default BoardingForm;
