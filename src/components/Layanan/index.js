import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
	IconLapangan,
	IconLoker,
	IconProfile,
	IconStadium,
} from "../../assets";
import { PRIMARY_COLOR } from "../../utils/constant";

const Layanan = ({ title }) => {
	const Icon = () => {
		if (title === "Paket Langganan") {
			return <IconLoker />;
		}
		if (title === "Booking Lapangan") {
			return <IconLapangan />;
		}
		if (title === "Join Team") {
			return <IconProfile />;
		}
		return <IconLoker />;
	};

	return (
		<TouchableOpacity style={styles.container}>
			<View style={styles.icon}>
				<Icon />
				<Text style={styles.text}>{title.replace(" ", "\n")}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Layanan;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: PRIMARY_COLOR,
		borderRadius: 10,
		padding: 10,
	},
	text: {
		fontSize: 14,
		fontFamily: "Poppins-Bold",
		color: "white",
		textAlign: "center",
	},
	icon: {
		marginTop: -30,
	},
});
