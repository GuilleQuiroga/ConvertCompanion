// Botones
const btnReset = document.querySelector("#btnReset");

// Medidas
const millimeters = document.querySelector("#millimeters");
const centimeters = document.querySelector("#centimeters");
const meters = document.querySelector("#meters");
const kilometers = document.querySelector("#kilometers");
const miles = document.querySelector("#miles");
const nauticMiles = document.querySelector("#nauticMiles");
const inches = document.querySelector("#inches");
const yards = document.querySelector("#yards");
const feets = document.querySelector("#feets");

/**
 * Conversión de milimetros al resto de medidas
 */
const mmToCm = () => {
	let mm = document.querySelector("#millimeters").value;
	let cm = mm / 10;
	return cm;
};
const mmToMet = () => {
	let mm = document.querySelector("#millimeters").value;
	let meter = mm / 1000;
	return meter;
};
const mmToKm = () => {
	let mm = document.querySelector("#millimeters").value;
	let km = mm / 1000000;
	return km.toFixed(8);
};
const mmToMiles = () => {
	let mm = document.querySelector("#millimeters").value;
	let miles = mm / 1609344;
	return miles.toFixed(8);
};
const mmToNauticMiles = () => {
	let mm = document.querySelector("#millimeters").value;
	let nauticMiles = mm / 1852000;
	return nauticMiles.toFixed(8);
};
const mmToInches = () => {
	let mm = document.querySelector("#millimeters").value;
	let inches = mm / 25.4;
	return inches.toFixed(8);
};
const mmToYards = () => {
	let mm = document.querySelector("#millimeters").value;
	let yards = mm / 914.4;
	return yards.toFixed(8);
};
const mmToFeets = () => {
	let mm = document.querySelector("#millimeters").value;
	let feets = mm / 304.8;
	return feets.toFixed(8);
};

/**
 * Conversión de centimetros al resto de medidas
 */
const cmToMm = () => {
	let cm = document.querySelector("#centimeters").value;
	let mm = cm * 10;
	return mm;
};
const cmToMet = () => {
	let cm = document.querySelector("#centimeters").value;
	let meter = cm / 100;
	return meter.toFixed(4);
};
const cmToKm = () => {
	let cm = document.querySelector("#centimeters").value;
	let km = cm / 100000;
	return km;
};
const cmToMiles = () => {
	let cm = document.querySelector("#centimeters").value;
	let miles = cm / 160934.4;
	return miles.toFixed(8);
};
const cmToNauticMiles = () => {
	let cm = document.querySelector("#centimeters").value;
	let nauticMiles = cm / 185200;
	return nauticMiles.toFixed(8);
};
const cmToInches = () => {
	let cm = document.querySelector("#centimeters").value;
	let inches = cm / 2.54;
	return inches.toFixed(8);
};
const cmToYards = () => {
	let cm = document.querySelector("#centimeters").value;
	let yards = cm / 91.44;
	return yards.toFixed(8);
};
const cmToFeets = () => {
	let cm = document.querySelector("#centimeters").value;
	let feets = cm / 30.48;
	return feets.toFixed(8);
};

/**
 * Conversión de metros al resto de medidas
 */
const mtrToMm = () => {
	let mtr = document.querySelector("#meters").value;
	let mm = mtr * 1000;
	return mm.toFixed(4);
};
const mtrToCm = () => {
	let mtr = document.querySelector("#meters").value;
	let cm = mtr * 100;
	return cm.toFixed(4);
};
const mtrToKm = () => {
	let mtr = document.querySelector("#meters").value;
	let km = mtr / 1000;
	return km.toFixed(4);
};
const mtrToMiles = () => {
	let mtr = document.querySelector("#meters").value;
	let miles = mtr / 1609.34;
	return miles.toFixed(4);
};
const mtrToNauticMiles = () => {
	let mtr = document.querySelector("#meters").value;
	let nauticMiles = mtr / 1852;
	return nauticMiles.toFixed(4);
};
const mtrToInches = () => {
	let mtr = document.querySelector("#meters").value;
	let inches = mtr * 39.37;
	return inches.toFixed(4);
};
const mtrToYards = () => {
	let mtr = document.querySelector("#meters").value;
	let yards = mtr * 1.09361;
	return yards.toFixed(4);
};
const mtrToFeets = () => {
	let mtr = document.querySelector("#meters").value;
	let feets = mtr * 3.281;
	return feets.toFixed(4);
};

/**
 * Conversión de kilometros al resto de medidas
 */
const kmToMm = () => {
	let km = document.querySelector("#kilometers").value;
	let mm = km * 1000000;
	return mm.toFixed(2);
};
const kmToCm = () => {
	let km = document.querySelector("#kilometers").value;
	let cm = km * 100000;
	return cm.toFixed(2);
};
const kmToMtr = () => {
	let km = document.querySelector("#kilometers").value;
	let mtr = km * 1000;
	return mtr.toFixed(2);
};
const kmToMiles = () => {
	let km = document.querySelector("#kilometers").value;
	let miles = km / 1.60934;
	return miles.toFixed(5);
};
const kmToNauticMiles = () => {
	let km = document.querySelector("#kilometers").value;
	let nauticMiles = km / 1.852;
	return nauticMiles.toFixed(5);
};
const kmToInches = () => {
	let km = document.querySelector("#kilometers").value;
	let inches = km * 39370;
	return inches.toFixed(3);
};
const kmToYards = () => {
	let km = document.querySelector("#kilometers").value;
	let yards = km * 1093.61;
	return yards.toFixed(3);
};
const kmToFeets = () => {
	let km = document.querySelector("#kilometers").value;
	let feets = km * 3280.84;
	return feets.toFixed(3);
};

/**
 * Conversión de millas al resto de medidas
 */
const milesToMm = () => {
	let miles = document.querySelector("#miles").value;
	let mm = miles * 1609340;
	return mm.toFixed(2);
};
const milesToCm = () => {
	let miles = document.querySelector("#miles").value;
	let cm = miles * 160934;
	return cm.toFixed(2);
};
const milesToMtr = () => {
	let miles = document.querySelector("#miles").value;
	let mtr = miles * 1609.34;
	return mtr.toFixed(2);
};
const milesToKm = () => {
	let miles = document.querySelector("#miles").value;
	let km = miles * 1.60934;
	return km.toFixed(2);
};
const milesToNauticMiles = () => {
	let miles = document.querySelector("#miles").value;
	let nauticMiles = miles / 1.15;
	return nauticMiles.toFixed(4);
};
const milesToInches = () => {
	let miles = document.querySelector("#miles").value;
	let inches = miles * 63360;
	return inches.toFixed(2);
};
const milesToYards = () => {
	let miles = document.querySelector("#miles").value;
	let yards = miles * 1760;
	return yards.toFixed(2);
};
const milesToFeets = () => {
	let miles = document.querySelector("#miles").value;
	let feets = miles * 5280;
	return feets.toFixed(2);
};

/**
 * Conversión de millas nauticas al resto de medidas
 */
const nauticMilesToMm = () => {
	let nauticMiles = document.querySelector("#nauticMiles").value;
	let mm = nauticMiles * 1852000;
	return mm.toFixed(2);
};
const nauticMilesToCm = () => {
	let nauticMiles = document.querySelector("#nauticMiles").value;
	let cm = nauticMiles * 185200;
	return cm.toFixed(2);
};
const nauticMilesToMtr = () => {
	let nauticMiles = document.querySelector("#nauticMiles").value;
	let mtr = nauticMiles * 1852;
	return mtr.toFixed(2);
};
const nauticMilesToKm = () => {
	let nauticMiles = document.querySelector("#nauticMiles").value;
	let km = nauticMiles * 1.852;
	return km.toFixed(2);
};
const nauticMilesToMiles = () => {
	let nauticMiles = document.querySelector("#nauticMiles").value;
	let miles = nauticMiles * 1.15078;
	return miles.toFixed(4);
};
const nauticMilesToInches = () => {
	let nauticMiles = document.querySelector("#nauticMiles").value;
	let inches = nauticMiles * 72913.42;
	return inches.toFixed(2);
};
const nauticMilesToYards = () => {
	let nauticMiles = document.querySelector("#nauticMiles").value;
	let yards = nauticMiles * 2025.37;
	return yards.toFixed(2);
};
const nauticMilesToFeets = () => {
	let nauticMiles = document.querySelector("#nauticMiles").value;
	let feets = nauticMiles * 6076.12;
	return feets.toFixed(2);
};

/**
 * Eventos
 */
// MILLIMETERS
millimeters.addEventListener("keyup", () => {
	if (document.querySelector("#millimeters").value === "" || document.querySelector("#millimeters").value === NaN) {
		centimeters.value = "";
		meters.value = "";
		kilometers.value = "";
		miles.value = "";
		nauticMiles.value = "";
		inches.value = "";
		yards.value = "";
		feets.value = "";
	} else {
		let resMmToCm = mmToCm();
		centimeters.value = `${resMmToCm} cm`;
		let resMmToMet = mmToMet();
		meters.value = `${resMmToMet} m`;
		let resMmToKm = mmToKm();
		kilometers.value = `${resMmToKm} km`;
		let resMmToMiles = mmToMiles();
		miles.value = `${resMmToMiles} miles`;
		let resMmToNauticMiles = mmToNauticMiles();
		nauticMiles.value = `${resMmToNauticMiles} nautic miles`;
		let resMmToInches = mmToInches();
		inches.value = `${resMmToInches} inches`;
		let resMmToYards = mmToYards();
		yards.value = `${resMmToYards} yards`;
		let resMmToFeets = mmToFeets();
		feets.value = `${resMmToFeets} fts`;
	}
});

// CENTIMETERS
centimeters.addEventListener("keyup", () => {
	if (document.querySelector("#centimeters").value === "" || document.querySelector("#centimeters").value === NaN) {
		millimeters.value = "";
		meters.value = "";
		kilometers.value = "";
		miles.value = "";
		nauticMiles.value = "";
		inches.value = "";
		yards.value = "";
		feets.value = "";
	} else {
		let resCmToMm = cmToMm();
		millimeters.value = `${resCmToMm} mm`;
		let resCmToMet = cmToMet();
		meters.value = `${resCmToMet} m`;
		let resCmToKm = cmToKm();
		kilometers.value = `${resCmToKm} km`;
		let resCmToMiles = cmToMiles();
		miles.value = `${resCmToMiles} miles`;
		let resCmToNauticMiles = cmToNauticMiles();
		nauticMiles.value = `${resCmToNauticMiles} nautic miles`;
		let resCmToInches = cmToInches();
		inches.value = `${resCmToInches} inches`;
		let resCmToYards = cmToYards();
		yards.value = `${resCmToYards} yards`;
		let resCmToFeets = cmToFeets();
		feets.value = `${resCmToFeets} fts`;
	}
});

// METERS
meters.addEventListener("keyup", () => {
	if (document.querySelector("#meters").value === "" || document.querySelector("#meters").value === NaN) {
		millimeters.value = "";
		centimeters.value = "";
		kilometers.value = "";
		miles.value = "";
		nauticMiles.value = "";
		inches.value = "";
		yards.value = "";
		feets.value = "";
	} else {
		let resMtrToMm = mtrToMm();
		millimeters.value = `${resMtrToMm} mm`;
		let resMtrToMet = mtrToCm();
		centimeters.value = `${resMtrToMet} cm`;
		let resMtrToKm = mtrToKm();
		kilometers.value = `${resMtrToKm} km`;
		let resMtrToMiles = mtrToMiles();
		miles.value = `${resMtrToMiles} miles`;
		let resMtrToNauticMiles = mtrToNauticMiles();
		nauticMiles.value = `${resMtrToNauticMiles} nautic miles`;
		let resMtrToInches = mtrToInches();
		inches.value = `${resMtrToInches} inches`;
		let resMtrToYards = mtrToYards();
		yards.value = `${resMtrToYards} yards`;
		let resMtrToFeets = mtrToFeets();
		feets.value = `${resMtrToFeets} fts`;
	}
});

// KILOMETERS
kilometers.addEventListener("keyup", () => {
	if (document.querySelector("#kilometers").value === "" || document.querySelector("#kilometers").value === NaN) {
		millimeters.value = "";
		centimeters.value = "";
		meters.value = "";
		miles.value = "";
		nauticMiles.value = "";
		inches.value = "";
		yards.value = "";
		feets.value = "";
	} else {
		let resKmToMm = kmToMm();
		millimeters.value = `${resKmToMm} mm`;
		let resKmToMet = kmToCm();
		centimeters.value = `${resKmToMet} cm`;
		let resKmToMtr = kmToMtr();
		meters.value = `${resKmToMtr} m`;
		let resKmToMiles = kmToMiles();
		miles.value = `${resKmToMiles} miles`;
		let resKmToNauticMiles = kmToNauticMiles();
		nauticMiles.value = `${resKmToNauticMiles} nautic miles`;
		let resKmToInches = kmToInches();
		inches.value = `${resKmToInches} inches`;
		let resKmToYards = kmToYards();
		yards.value = `${resKmToYards} yards`;
		let resKmToFeets = kmToFeets();
		feets.value = `${resKmToFeets} fts`;
	}
});

// MILES
miles.addEventListener("keyup", () => {
	if (document.querySelector("#miles").value === "" || document.querySelector("#miles").value === NaN) {
		millimeters.value = "";
		centimeters.value = "";
		meters.value = "";
		kilometers.value = "";
		nauticMiles.value = "";
		inches.value = "";
		yards.value = "";
		feets.value = "";
	} else {
		let resMilesToMm = milesToMm();
		millimeters.value = `${resMilesToMm} mm`;
		let resMilesToMet = milesToCm();
		centimeters.value = `${resMilesToMet} cm`;
		let resMilesToMtr = milesToMtr();
		meters.value = `${resMilesToMtr} m`;
		let resMilesToMiles = milesToKm();
		kilometers.value = `${resMilesToMiles} km`;
		let resMilesToNauticMiles = milesToNauticMiles();
		nauticMiles.value = `${resMilesToNauticMiles} nautic miles`;
		let resMilesToInches = milesToInches();
		inches.value = `${resMilesToInches} inches`;
		let resMilesToYards = milesToYards();
		yards.value = `${resMilesToYards} yards`;
		let resMilesToFeets = milesToFeets();
		feets.value = `${resMilesToFeets} fts`;
	}
});

// NAUTIC MILES
nauticMiles.addEventListener("keyup", () => {
	if (document.querySelector("#nauticMiles").value === "" || document.querySelector("#nauticMiles").value === NaN) {
		millimeters.value = "";
		centimeters.value = "";
		meters.value = "";
		kilometers.value = "";
		miles.value = "";
		inches.value = "";
		yards.value = "";
		feets.value = "";
	} else {
		let resNauticMilesToMm = nauticMilesToMm();
		millimeters.value = `${resNauticMilesToMm} mm`;
		let resNauticMilesToCm = nauticMilesToCm();
		centimeters.value = `${resNauticMilesToCm} cm`;
		let resNauticMilesToMtr = nauticMilesToMtr();
		meters.value = `${resNauticMilesToMtr} m`;
		let resNauticMilesToKm = nauticMilesToKm();
		kilometers.value = `${resNauticMilesToKm} km`;
		let resNauticMilesToMiles = nauticMilesToMiles();
		miles.value = `${resNauticMilesToMiles} miles`;
		let resNauticMilesToInches = nauticMilesToInches();
		inches.value = `${resNauticMilesToInches} inches`;
		let resNauticMilesToYards = nauticMilesToYards();
		yards.value = `${resNauticMilesToYards} yards`;
		let resNauticMilesToFeets = nauticMilesToFeets();
		feets.value = `${resNauticMilesToFeets} fts`;
	}
});

// Reset de los inputs
btnReset.addEventListener("click", function () {
	millimeters.value = "";
	centimeters.value = "";
	meters.value = "";
	kilometers.value = "";
	miles.value = "";
	nauticMiles.value = "";
	inches.value = "";
	yards.value = "";
	feets.value = "";
});
