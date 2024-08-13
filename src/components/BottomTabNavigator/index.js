import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TabItem from "../TabItem";

const BottomTabNavigator = ({ state, descriptors, navigation }) => {
	return (
		<View style={styles.container}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
							? options.title
							: route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, route.params);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				return (
					<TabItem
						key={index}
						isFocused={isFocused}
						label={label}
						onLongPress={onLongPress}
						onPress={onPress}
					/>
				);
			})}
		</View>
	);
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: "white",
		justifyContent: "space-between",
		paddingVertical: 30,
		paddingHorizontal: 20,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
});
