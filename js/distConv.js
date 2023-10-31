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
 * Eventos
 */
// MILLIMETERS
millimeters.addEventListener("keyup", () => {
	if (document.querySelector("#millimeters").value === "") {
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
	if (document.querySelector("#centimeters").value === "") {
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
	if (document.querySelector("#meters").value === "") {
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
	if (document.querySelector("#kilometers").value === "") {
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
