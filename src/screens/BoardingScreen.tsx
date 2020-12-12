import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BoardingForm from '../components/BoardingForm';

const BoardingScreen = () => {
	return (
		<View style={styles.container}>
			<LinearGradient
				style={styles.headerContainer}
				colors={['#453dcb', '#00d4ff']}
				end={{ y: 0.99, x: 0.99 }}
			>
				<Text style={styles.headline}>Welcome!</Text>
				<Text style={styles.paragraph}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
					odit itaque consectetur dolorem fuga veniam quos esse inventore iste,
					expedita, similique eius ipsum illo molestiae corporis autem ex
					commodi sed.
				</Text>
			</LinearGradient>

			<BoardingForm />

			<View style={styles.footer}>
				<Text>HOSS & COMPANY</Text>
			</View>
		</View>
	);
};

export default BoardingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	headerContainer: {
		backgroundColor: 'lightblue',
		paddingHorizontal: '6%',
		paddingTop: '20%',
		height: '40%',
	},
	headline: {
		color: 'white',
		fontSize: 30,
	},
	paragraph: {
		color: '#eee',
		fontSize: 15,
		marginTop: 15,
	},
	footer: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '10%',
	},
});
