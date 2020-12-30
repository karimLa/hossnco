import React from 'react';
import Box from '../../components/Box';
import Text from '../../components/Text';
import { useUser } from '../../context/User';

const HomeScreen = () => {
	const { user } = useUser();
	return (
		<Box>
			<Text>Welcome {user?.username}</Text>
		</Box>
	);
};

export default HomeScreen;
