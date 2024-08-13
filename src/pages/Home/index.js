import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderInformation } from "../../components";

const Home = () => {
	return (
		<View style={styles.page}>
			<View style={styles.wrapperHeader}>
				<HeaderInformation />
			</View>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
	wrapperHeader: {
		paddingHorizontal: 16,
		paddingVertical: 30,
	},
});
