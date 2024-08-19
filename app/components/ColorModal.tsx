import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import ColorPicker, {
	HueSlider,
	OpacitySlider,
	Panel1,
	Panel3,
	Preview,
	Swatches,
} from "reanimated-color-picker";
import { tw } from "../actions/utils";
import { ModalComponentProp } from "react-native-modalfy";


export default function ColorModal({ modal: { closeModal, params } }: any) {
	let onSelectColor = (e: any) => {
		params.updater(e.hex);
	};

	return (
		<View style={tw("p-2 bg-white rounded-xl gap-2")}>
			<View style={tw("self-center")}>
				<Text style={tw("text-lg font-bold text-neutral-500")}>
					Change Color
				</Text>
			</View>
			<ColorPicker
				style={[{ width: 200 }, tw("gap-2")]}
				value={params.color}
				onComplete={onSelectColor}
			>
				<Panel3 />
				<HueSlider />
				<OpacitySlider />
				{/* <Swatches /> */}
			</ColorPicker>
			<Button onPress={() => closeModal()} title="close"></Button>
		</View>
	);
}
