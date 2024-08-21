import { View, Text, Touchable } from "react-native";
import React from "react";
import MonoView from "./MonoView";
import { ScrollView } from "react-native-gesture-handler";
import { IMono, tw } from "../actions/utils";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { useBottomSheet } from "./SheetContext";

export default function MonoPallete({
	MonoItems,
	id,
}: {
	MonoItems: IMono;
	id?: any;
}) {
	let saveName = "color" + String(id);
	let { opensheet } = useBottomSheet();

	let saveMono = () => {
		try {
			opensheet(MonoItems, saveName, "tint");
		} catch (err) {
			throw new Error(err);
		}
	};
	return (
		<View style={tw("gap-2")}>
			<View style={tw("flex-row ")}>
				<View style={tw("mr-auto")}>
					<Text style={tw("text-lg")}>Color-{id}</Text>
				</View>
				<TouchableOpacity
					style={tw("ml-auto")}
					onPress={async () => {
						// try {
						// 	await save(PaletteItems, saveName).then((resp) => {
						// 		console.log(comps.getString(saveName));
						// 	});
						// } catch (err) {}
						saveMono();
						// openSheet(Pale, saveName);
					}}
				>
					<Text style={tw("text-xl")}>Save</Text>
				</TouchableOpacity>
			</View>
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
