import { View, Text } from "react-native";
import React from "react";
import MonoView from "./MonoView";
import { ScrollView } from "react-native-gesture-handler";
import { IMono, tw } from "../actions/utils";

export default function MonoPallete({
	MonoItems,
	id,
}: {
	MonoItems: IMono;
	id?: any;
}) {
	return (
		<View style={tw("gap-2")}>
			<Text style={tw("text-xl")}>Color-{id}</Text>
			<View style={tw("bg-white rounded-md px-2 gap-1")}>
				<View>
					<ScrollView horizontal contentContainerStyle={tw("py-3")}>
						{MonoItems.shades.map((hex, i) => {
							return <MonoView hex={hex} id={i} key={i} />;
						})}
					</ScrollView>
				</View>
				<View>
					<ScrollView horizontal contentContainerStyle={tw("py-3")}>
						{MonoItems.tints.map((hex, i) => {
							return <MonoView hex={hex} id={i} key={i} />;
						})}
					</ScrollView>
				</View>
			</View>
		</View>
	);
}
