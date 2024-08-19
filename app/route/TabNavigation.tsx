import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Saved from "../screens/Saved";
let Tabs = createBottomTabNavigator();
import Ionicons from "@expo/vector-icons/Ionicons";
import Mono from "../screens/Mono";

export default function TabNavigation() {
	return (
		<Tabs.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				// freezeOnBlur: true,
			}}
		>
			<Tabs.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: () => {
						return <Ionicons name="color-filter" size={22} />;
					},
				}}
			/>
			<Tabs.Screen
				name="Mono"
				component={Mono}
				options={{
					tabBarIcon: () => {
						return <Ionicons name="color-palette" size={22} />;
					},
				}}
			/>
			<Tabs.Screen
				name="Saved"
				component={Saved}
				options={{
					tabBarIcon: () => {
						return <Ionicons name="heart" size={22} />;
					},
				}}
			/>
		</Tabs.Navigator>
	);
}
