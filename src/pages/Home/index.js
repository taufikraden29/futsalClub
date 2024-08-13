import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderInformation, Layanan } from "../../components";
import { Banner } from "../../assets";
import { PRIMARY_COLOR } from "../../utils/constant";

import { Component } from "react";

class Home extends Component {
	render() {
		return (
			<View style={styles.page}>
				<View style={styles.wrapperHeader}>
					<HeaderInformation />
					<Image source={Banner} style={styles.banner} />
					<View style={styles.wrapperLabel}>
						<Text style={styles.label}>
							Ayo! <Text style={styles.textBold}>Ruday Futsal</Text>
						</Text>
					</View>
					<View style={styles.wrapperLayanan}>
						<Layanan title="Paket Langganan" />
						<Layanan title="Booking Lapangan" />
						<Layanan title="Join Team" />
					</View>
				</View>
			</View>
		);
	}
}

export default Home;

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
	wrapperHeader: {
		paddingHorizontal: 16,
		paddingVertical: 30,
	},
	banner: {
		width: "100%",
		height: windowHeight * 0.14,
		marginTop: windowHeight * 0.016,
	},
	label: {
		fontSize: 18,
		fontFamily: "Poppins-normal",
	},
	textBold: {
		fontSize: 18,
		fontFamily: "Poppins-Bold",
		color: PRIMARY_COLOR,
	},
	wrapperLabel: {
		paddingHorizontal: 16,
		marginTop: 14,
	},
	wrapperLayanan: {
		marginTop: windowHeight * 0.04,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 16,
	},
});
