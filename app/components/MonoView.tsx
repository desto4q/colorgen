import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { tw } from "../actions/utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useModal } from "react-native-modalfy";
import { useBottomSheet } from "./SheetContext";

export default function MonoView({ hex, id }: { hex: string; id?: number }) {
	let [baseColor, setBaseColor] = useState<string>(hex);
	useEffect(() => {}, []);
	let updateColor = (hex: string) => {
		setBaseColor(hex);
	};
	const { openModal } = useModal();
	const sendMessage = () =>
		openModal("ColorModal", { color: baseColor, updater: updateColor });

	
	return (
		<TouchableOpacity
			style={tw("p-1")}
			onPress={() => {
				sendMessage();
			}}
		>
			<View
				style={[
					tw("h-14 w-14 rounded-full"),
					{
						backgroundColor: baseColor,
					},
				]}
			></View>
		</TouchableOpacity>
	);
}
