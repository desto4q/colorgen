import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import MaterialYou from "react-native-material-you-colors";
import { generateColor, generateRandomColors } from "../actions/actions";
import { IColors, tw } from "../actions/utils";
import ColorView from "../components/ColorView";
import PaletteView from "../components/PaletteView";

export default function Home() {
	let [colors, setColors] = useState<any[][]>([]);
	let generatedColors = useMemo(() => {
		return generateColor(generateRandomColors(10));
	}, []);
	useEffect(() => {
		setColors(generatedColors);
	}, []);
	return (
		<View style={tw(" ")}>
			<View style={tw("p-2 py-4 border-b bg-white border-neutral-200")}>
				<Text style={tw("text-xl ")}>ColorGen</Text>
			</View>
			<ScrollView contentContainerStyle={tw("gap-2 px-2 pb-24 ")}>
				{colors.map((e, key) => {
					return <PaletteView PaletteItems={e} id={key} key={key} />;
				})}
			</ScrollView>
		</View>
	);
}
