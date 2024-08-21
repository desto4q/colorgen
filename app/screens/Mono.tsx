import { View, Text, LayoutAnimation } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { tw } from "../actions/utils";
import { ScrollView } from "react-native-gesture-handler";
import PaletteView from "../components/PaletteView";
import { generateMono, generateRandomColors } from "../actions/actions";
import MonoVIew from "../components/MonoView";
import MonoView from "../components/MonoView";
import MonoPallete from "../components/MonoPallete";

interface iShades {
	shades: string[];
	tints: string[];
}
export default function Mono() {
	let [colors, setColors] = useState<iShades[]>([]);

	let updateUi = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		setColors(generateMono(generateRandomColors(6), 6));
	};
	useLayoutEffect(() => {
		updateUi();
	}, []);
	useEffect(() => {
		// console.log(generateMono([]))
	}, []);
	useEffect(() => {}, [colors]);
	return (
		<View style={tw("bg-red-200")}>
			<View style={tw("p-2 py-4 border-b bg-white border-neutral-200")}>
				<Text style={tw("text-xl ")}>ColorGen</Text>
			</View>
			<ScrollView contentContainerStyle={tw("gap-2 px-2 pb-24 ")}>
				{/* {colors.map((e, key) => {
					return <PaletteView PaletteItems={e} id={key} key={key} />;
				})} */}
				{colors.map((e, i) => {
					return <MonoPallete MonoItems={e} key={i} id={i} />;
				})}
			</ScrollView>
		</View>
	);
}
