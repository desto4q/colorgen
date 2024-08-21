import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import React from "react";
import { IColors, tw } from "../actions/utils";
import ColorView from "./ColorView";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { comps, save } from "../actions/Storage";
import { useBottomSheet } from "./SheetContext";

export default function PaletteView({
	PaletteItems,
	id,
}: {
	PaletteItems: IColors[];
	id: number;
}) {
	let [BufferPalette, setBuffer] = useState<IColors[]>([]);
	useLayoutEffect(() => {
		setBuffer(PaletteItems);
	}, []);

	let updateBuffer = ({ label, color }: IColors) => {
		let TempPalette: IColors[] = [...BufferPalette];
		for (let i of TempPalette) {
			if (i.label == label) {
				i.color = color;
			}
			setBuffer(TempPalette);
			return;
		}
	};
	// const isFirstRender = useRef(true);
	// useEffect(() => {
	// 	if (isFirstRender.current) {
	// 		// Skip the first render
	// 		isFirstRender.current = false;
	// 		return;
	// 	}
	// 	console.log(`color-${id}`, BufferPalette);
	// }, [BufferPalette]);
	let saveName = `color-${id}`;
	let { opensheet } = useBottomSheet();
	return (
		<View style={tw(" gap-2")}>
			<View style={tw("py-1 flex-row")}>
				<Text style={tw("text-lg")}>Color-{id}</Text>
				<TouchableOpacity
					style={tw("ml-auto")}
					onPress={async () => {
						// try {
						// 	await save(PaletteItems, saveName).then((resp) => {
						// 		console.log(comps.getString(saveName));
						// 	});
						// } catch (err) {}
						opensheet(PaletteItems, saveName);
					}}
				>
					<Text style={tw("text-xl")}>save</Text>
				</TouchableOpacity>
			</View>
			<View>{/* <Text>text</Text> */}</View>
			<View style={tw(" bg-white shadow-sm px-2 rounded-xl")}>
				<ScrollView horizontal contentContainerStyle={tw("py-4   gap-2 ")}>
					{PaletteItems.map((e: IColors) => {
						return (
							<ColorView
								updater={updateBuffer}
								key={e.color}
								label={e.label}
								color={e.color}
							/>
						);
					})}
				</ScrollView>
			</View>
		</View>
	);
}
