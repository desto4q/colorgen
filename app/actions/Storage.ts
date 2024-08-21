import Storage from "expo-storage";
import { MMKV } from "react-native-mmkv";
// Helper function to add a namespace to keys

let comps = new MMKV({ id: "comp" });
// let checker (id:string)=> {
// }

let tints = new MMKV({
	id: "tints",
});

let getAllComps = async () => {
	try {
		let tempArray = [];
		let keys = comps.getAllKeys();
		for (let i of keys) {
			let ObjArray = comps.getString(i);
			let parsed = JSON.parse(ObjArray);
			let obj = {
				name: i,
				colors: parsed,
			};
			tempArray.push(obj);
			// let tempObject = {
			// 	label: i,
			// 	colors: JSON.parse(tempArray),
			// };
		}
		return tempArray;
	} catch (err) {
		return [];
	}
};
let getAllShades = async () => {
	try {
		let tempArray = [];
		let keys = tints.getAllKeys();

		for (let i of keys) {
			let ObjArray = tints.getString(i);

			let parsed = JSON.parse(ObjArray);
			let obj = {
				name: i,
				colors: parsed,
			};
			tempArray.push(obj);
			// let tempObject = {
			// 	label: i,
			// 	colors: JSON.parse(tempArray),
			// };
		}
		return tempArray;
	} catch (err) {
		return [];
	}
};

let saveTints = async (item: any[], name: string) => {
	let tempJson = JSON.stringify(item);
	tints.set(name, tempJson);
};
let save = async (item: any[], name: string) => {
	let tempJson = JSON.stringify(item);
	comps.set(name, tempJson);
};

export { save, comps, saveTints, tints, getAllComps, getAllShades };
