import { View, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { tw } from "../actions/utils";
import { ScrollView } from "react-native-gesture-handler";
import PaletteView from "../components/PaletteView";
import { generateMono, generateRandomColors } from "../actions/actions";

interface iShades {
	shades: string[];
	tints: string[];
}
export default function Mono() {
	let [colors, setColors] = useState<iShades[]>([]);
	useLayoutEffect(() => {
		setColors(generateMono(generateRandomColors(6), 5));
	}, []);
	useEffect(() => {}, [colors]);
	return (
		<View style={tw(" ")}>
			<View style={tw("p-2 py-4 border-b bg-white border-neutral-200")}>
				<Text style={tw("text-xl ")}>ColorGen</Text>
			</View>
			<ScrollView contentContainerStyle={tw("gap-2 px-2 pb-24 ")}>
				{/* {colors.map((e, key) => {
					return <PaletteView PaletteItems={e} id={key} key={key} />;
				})} */}
				{colors.map((e,i) => {
					return (
						<View key={i}>
							<ScrollView horizontal>
								{e.shades.map((e, i) => {
									return (
										<View
											key={i}
											style={[
												tw("h-20 w-20"),
												{
													backgroundColor: e,
												},
											]}
										></View>
									);
								})}
							</ScrollView>
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
}
