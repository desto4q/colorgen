import {
	View,
	Text,
	LayoutAnimation,
	InteractionManager,
	TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { tw } from "../actions/utils";
import { comps, getAllComps } from "../actions/Storage";
import PaletteView from "../components/PaletteView";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { useBottomSheet } from "../components/SheetContext";

export default function Saved() {
	let [palette, setPallete] = useState<any[]>([]);
	let configure = useCallback(() => {
		return LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
	}, []);
	let getter = async () => {
		let resp = await getAllComps();
		
		configure();
		setPallete(resp);
	};

	useFocusEffect(
		useCallback(() => {
			const task = InteractionManager.runAfterInteractions(() => {
				getter();
			});
		}, [])
	);
	useEffect(() => {
		getter();
	}, []);
	// useEffect(() => {
	// 	console.log(palette);
	// }, [palette]);
	let { opensheet } = useBottomSheet();
	return (
		<View style={tw("flex-1 h-full")}>
			<View style={tw("px-2 py-3 bg-white border-b border-neutral-200")}>
				<View style={tw("flex-row justify-between")}>
					<Text style={tw("text-xl")}>Saved: Complements</Text>
					<TouchableOpacity
						style={tw("p-1 px-2 bg-red-200")}
						onPress={() => {
							// configure;
							// comps.clearAll();
							// setPallete([]);
							opensheet();
						}}
					>
						<Text>clear all</Text>
					</TouchableOpacity>
				</View>
			</View>

			<ScrollView style={tw("px-2")}>
				{palette.map((e, i) => {
					console.log(e,i);
					return <PaletteView id={e.name} PaletteItems={e.colors} key={i} />;
				})}
			</ScrollView>

			<View></View>
		</View>
	);
}
