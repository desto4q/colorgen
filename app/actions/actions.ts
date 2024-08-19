import chroma from "chroma-js";
import randomColor from "randomcolor";
import MaterialYou from "react-native-material-you-colors";

// let col = "#6eeb8b";
let col = "#af82d1";

const generatePalette = (col: string) => {
	const mainColor = chroma(col).hex();
	// Adjusting complementary colors for softer contrast
	const complementaryColors = [
		chroma(col).set("hsl.h", "+150").hex(), // Softer complementary
		chroma(col).set("hsl.h", "+210").hex(), // Another softer complementary
	];

	// Using analogous colors
	const analogousColors = [
		chroma(col).set("hsl.h", "+30").hex(), // Analogous color 1
		chroma(col).set("hsl.h", "-30").hex(), // Analogous color 2
	];

	const thirdColor = chroma(col).set("hsl.h", "+240").hex();
	const textColor = chroma(col).luminance() > 0.5 ? "#000" : "#fff";
	// const backgroundColor = chroma(col).desaturate().brighten(2).hex();

	const palette = [
		{ label: "Main Color", color: mainColor },
		{ label: "Complementary 1", color: complementaryColors[0] },
		{ label: "Complementary 2", color: complementaryColors[1] },
		{ label: "Analogous 1", color: analogousColors[0] },
		{ label: "Analogous 2", color: analogousColors[1] },
		{ label: "Third Color", color: thirdColor },
		{ label: "Text Color", color: textColor },
		// { label: "Background Color", color: backgroundColor },
	];

	return palette;
};
let generateMonoPalette = (baseColor: string, numColors: number = 5) => {
	const scale = chroma
		.scale([baseColor, "#ffffff"])
		.mode("lab")
		.colors(numColors);
	const shades = chroma
		.scale([baseColor, "#000000"])
		.mode("lab")
		.colors(numColors);
	return {
		tints: scale,
		shades: shades,
	};
};
const generateColor = (colors: string[]) => {
	if (colors.length > 0) {
		let palleteArray: any[] = [];
		colors.forEach((e) => {
			let pallete = generatePalette(e);
			palleteArray.push(pallete);
		});
		return palleteArray;
	}
	return [generatePalette(col)];
};

let generateRandomColors = (count: number = 10) => {
	let colors = Array.from({ length: count }, () => randomColor());
	return colors;
};
const generateMono = (colors: string[], num: number = 5) => {
	if (colors.length > 0) {
		let palleteArray: any[] = [];
		colors.forEach((e) => {
			let pallete = generateMonoPalette(e, num);
			palleteArray.push(pallete);
		});
		return palleteArray;
	}
	return [generatePalette(col)];
};

export { generateColor, generateRandomColors, generatePalette, generateMono };
