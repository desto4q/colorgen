import { View, Text, LayoutAnimation } from "react-native";
import React, {
	RefObject,
	useCallback,
	useEffect,
	useLayoutEffect,
	useState,
} from "react";
import BottomSheet, { TouchableOpacity } from "@gorhom/bottom-sheet";
import { tw } from "../actions/utils";
import { TextInput } from "react-native-gesture-handler";
import { comps, save, saveTints, tints } from "../actions/Storage";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SaveSheet({
	bottomSheetRef,
	data,
	palleteName,
	paletteType,
}: {
	bottomSheetRef: RefObject<BottomSheet>;
	data: any[];
	palleteName?: string;
	paletteType?: "comp" | "tint";
}) {
	let [name, setName] = useState<string>(palleteName || "");
	useEffect(() => {
		setName(palleteName);
	}, [palleteName]);
	let SavePallete = async () => {
		try {
			if (paletteType == "tint") {
				return await saveTints(data, name).then(() => {
					let tempTint = tints.getString(name);
					console.log(tempTint);
				});
			}
			return await save(data, name).then((resp) => {
				// console.log(comps.getString(name));
			});
		} catch (err) {}
	};

	return (
		<BottomSheet
			enablePanDownToClose
			ref={bottomSheetRef}
			snapPoints={["50%", "70%"]}
			backgroundStyle={tw("")}
		>
			<View style={tw("px-2  mt-2 rounded-t-xl gap-2 py-3")}>
				<View style={tw("flex-row items-center justify-between")}>
					<View>
						<Text style={tw("text-xl")}>Save Pallette</Text>
					</View>
					<TouchableOpacity
						onPress={() => {
							SavePallete();
						}}
						style={tw("p-2 bg-emerald-300 rounded-sm")}
					>
						<Ionicons name="heart" size={22} />
					</TouchableOpacity>
				</View>
				<TextInput
					style={tw("w-full p-2 text-lg bg-neutral-200 rounded-md")}
					value={name}
					onChangeText={(e) => setName(e)}
				></TextInput>
				<View>
					<Text>{JSON.stringify(data)}</Text>
				</View>
			</View>
			{/* <TouchableOpacity
					style={tw("px-2 p-2 bg-emerald-300 rounded-sm my-1")}
					onPress={() => {
						SavePallete();
					}}
				>
					<Text>Save</Text>
				</TouchableOpacity> */}
		</BottomSheet>
	);
}
