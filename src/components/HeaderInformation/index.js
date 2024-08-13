import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconDefaultUser, IconJadwal, IconStadium } from "../../assets";
import { PRIMARY_COLOR } from "../../utils/constant";

const HeaderInformation = () => {
	return (
		<View style={styles.container}>
			<View style={styles.userInfo}>
				<IconDefaultUser />
				<View style={styles.textWrapper}>
					<Text style={styles.greeting}>Hai, Apa kabar?</Text>
					<Text style={styles.name}>R M Irsyad Taufik</Text>
				</View>
			</View>
			<View style={styles.jadwalInfo}>
				{/* <IconJadwal /> */}
				<View style={styles.waktu}>
					<Text style={styles.jam}>19.00 WIB</Text>
					<Text style={styles.tanggal}>Sabtu, 21-08-2024</Text>
				</View>
				<View style={styles.iconJadwal}>
					<IconStadium />
					<View>
						<Text style={styles.labelNext}>Next Jadwal</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default HeaderInformation;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	userInfo: {
		flexDirection: "row",
		alignItems: "center",
	},
	jadwalInfo: {
		flexDirection: "row",
		alignItems: "center",
	},
	textWrapper: {
		marginLeft: 9,
	},
	name: {
		fontSize: 13,
		fontFamily: "Poppins-Bold",
		color: PRIMARY_COLOR,
	},
	greeting: {
		fontSize: 13,
		fontFamily: "Poppins-light",
	},
	jam: {
		fontSize: 11,
		textAlign: "right",
		fontFamily: "Poppins-Bold",
	},
	tanggal: {
		fontSize: 11,
		textAlign: "right",
		fontFamily: "Poppins-normal",
	},
	iconJadwal: {
		alignItems: "center",
	},
	labelNext: {
		fontSize: 11,
		fontFamily: "Poppins-normal",
	},
});
