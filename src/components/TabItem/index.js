import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../utils/constant";
import {
	IconAkun,
	IconAkunActive,
	IconHome,
	IconHomeActive,
	IconJadwal,
	IconJadwalActive,
} from "../../assets/icons";

const TabItem = ({ label, isFocused, onLongPress, onPress }) => {
	const Icon = () => {
		if (label === "Home") {
			return isFocused ? <IconHomeActive /> : <IconHome />;
		}
		if (label === "Akun") {
			return isFocused ? <IconAkunActive /> : <IconAkun />;
		}
		if (label === "Jadwal") {
			return isFocused ? <IconJadwalActive /> : <IconJadwal />;
		}
	};
	return (
		<TouchableOpacity
			onPress={onPress}
			onLongPress={onLongPress}
			style={isFocused ? styles.containerFocus : styles.container}
		>
			<Icon />
			{isFocused && <Text style={styles.text}>{label.toUpperCase()}</Text>}
		</TouchableOpacity>
	);
};

export default TabItem;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		padding: 5,
	},
	containerFocus: {
		alignItems: "center",
		padding: 5,
		backgroundColor: SECONDARY_COLOR,
		flexDirection: "row",
		borderRadius: 10,
	},
	text: {
		color: PRIMARY_COLOR,
		fontSize: 18,
		marginLeft: 8,
		fontWeight: "600",
	},
});
