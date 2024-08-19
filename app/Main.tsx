import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TabNavigation from "./route/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function Main() {
	return (
		<SafeAreaView style={{flex:1}}>
			<NavigationContainer>
				<TabNavigation />
			</NavigationContainer>
		</SafeAreaView>
	);
}
