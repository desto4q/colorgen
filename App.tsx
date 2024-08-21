import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import Main from "./app/Main";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ModalProvider, createModalStack } from "react-native-modalfy";
import ColorModal from "./app/components/ColorModal";
import { SheetContextProvider } from "./app/components/SheetContext";
const modalCOnfig = { ColorModal };
const stack = createModalStack(modalCOnfig);
export default function App() {
	useLayoutEffect(() => {}, []);
	return (
		<GestureHandlerRootView>
			<ModalProvider stack={stack}>
				<SheetContextProvider>
					<Main />
				</SheetContextProvider>
			</ModalProvider>
		</GestureHandlerRootView>
	);
}
