import { View, Text, Modal, Button, LayoutAnimation } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { IColors, tw } from "../actions/utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useModal } from "react-native-modalfy";
interface IColorView extends IColors {
	color: string;
	label: string;
	updater: (e: IColors) => any;
}
export default function ColorView({ color, label, updater }: IColorView) {
	let [baseColor, setColor] = useState("red");
	useLayoutEffect(() => {
		setColor(color);
	}, []);
	let updateColor = (newColor: string) => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		setColor(newColor);
		updater({ label: label, color: newColor });
	};
	const { openModal } = useModal();
	const sendMessage = () =>
		openModal("ColorModal", { color: color, updater: updateColor });
	// const setSheet = () => {
	// 	openSheet(color, updateColor);
	// };
	return (
		<View>
			<TouchableOpacity
				style={tw("p-1")}
				onPress={() => {
					sendMessage();
					// setSheet();
				}}
			>
				<View
					style={[
						tw("h-14 w-14 rounded-full shadow-md"),
						{
							backgroundColor: baseColor,
						},
					]}
				></View>
			</TouchableOpacity>
		</View>
	);
}
