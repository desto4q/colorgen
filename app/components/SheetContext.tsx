import { createContext, RefObject, useContext, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import SaveSheet from "./SaveSheet";
let myVar: any = {};
let SheetContext = createContext(myVar);

export let SheetContextProvider = ({ children }) => {
	let [data, setData] = useState<any>([]);
	let [palleteName, setPalleteName] = useState("");
	let bottomSheetRef = useRef<BottomSheet>(null);
	let [paletteType, setPaletteType] = useState<"comp" | "tint">("comp");
	let opensheet = (
		data: any[],
		palleteName: string,
		paletteType?: "comp" | "tint"
	) => {
		setData(data);
		setPalleteName(palleteName);
		if (paletteType) {
			setPaletteType(paletteType);
		}
		if (!paletteType) {
			setPaletteType("comp");
		}
		return bottomSheetRef.current?.snapToPosition("75%");
	};
	return (
		<SheetContext.Provider value={{ data, bottomSheetRef, opensheet }}>
			{children}
			{/* <BottomSheet
				enablePanDownToClose
				ref={bottomSheetRef}
				snapPoints={["50%", "70%"]}
			></BottomSheet> */}
			<SaveSheet
				paletteType={paletteType}
				bottomSheetRef={bottomSheetRef}
				data={data}
				palleteName={palleteName}
			/>
		</SheetContext.Provider>
	);
};
interface IContext {
	bottomSheetRef: RefObject<BottomSheet>;
	data: any;
	openSheet: (
		data: any[],
		palleteName: string,
		paletteType?: "comp" | "tint"
	) => any;
}

export let useBottomSheet = () => {
	let context = useContext(SheetContext);
	if (!context) {
		return;
	}
	return context;
};
