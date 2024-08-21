import {
	View,
	Text,
	Touchable,
	LayoutAnimation,
	InteractionManager,
	TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { tw } from "../actions/utils";
import { comps, getAllComps } from "../actions/Storage";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import PaletteView from "../components/PaletteView";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
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

	return (
		<View style={tw("flex-1 h-full")}>
			<View style={tw("px-2 py-3 bg-white border-b border-neutral-200")}>
				<Text style={tw("text-xl")}>Saved Complements</Text>
				<TouchableOpacity
					style={tw("p-2 bg-red-200")}
					
					onPress={() => {
						configure;
						comps.clearAll();
						setPallete([]);
					}}
				>
					<Text>clear all</Text>
				</TouchableOpacity>
			</View>
			{/* <View style={tw("my-auto")}>
				<TouchableOpacity
					onPress={() => {
						// bottomSheetRef.current?.snapToPosition("70%")
						// console.log(op)
					}}
					style={tw("p-2 bg-red-200  self-center ")}
				>
					<Text>open Sheet</Text>
				</TouchableOpacity>
			</View> */}
			<ScrollView style={tw("px-2")}>
				{palette.map((e,i) => {
					console.log(e);
					return <PaletteView id={i} PaletteItems={e.colors} key={i}/>;
				})}
			</ScrollView>

			<View></View>
		</View>
	);
}
