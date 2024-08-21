import { View, Text, Button, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import ColorPicker from "react-native-wheel-color-picker";
import { tw } from "../actions/utils";

export default function ColorModal({ modal: { closeModal, params } }: any) {
	let onSelectColor = (e: string) => {
		params.updater(e);
	};
	return (
		<View style={tw("p-2  bg-white rounded-xl gap-2")}>
			<View style={tw("self-center")}>
				<Text style={tw("text-lg font-bold text-neutral-500")}>
					Change Color
				</Text>
			</View>

			<View style={tw(" p-2   h-96")}>
				<ColorPicker
				// gapSize={10}
				// wheelHidden
					color={params.color}
					onColorChange={(color: string) => {}}
					onColorChangeComplete={onSelectColor}
					thumbSize={30}
					sliderSize={30}
					noSnap={true}
					row={false}
					wheelLoadingIndicator={<ActivityIndicator size={40} />}
					// useNativeLayout
					useNativeDriver
				/>
			</View>
			{/* <Button onPress={() => closeModal()} title="close"></Button> */}
		</View>
	);
}
