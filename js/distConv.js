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
const convertFromMillimeters = (unit) => {
	const mm = parseFloat(document.querySelector("#millimeters").value);

	const conversions = {
		cm: mm / 10,
		meter: mm / 1000,
		km: (mm / 1000000).toFixed(8),
		miles: (mm / 1609344).toFixed(8),
		nauticalMiles: (mm / 1852000).toFixed(8),
		inches: (mm / 25.4).toFixed(8),
		yards: (mm / 914.4).toFixed(8),
		feet: (mm / 304.8).toFixed(8),
	};
	if (mm == "") {
		conversions[unit] = null;
	} else {
		return conversions[unit] || "Invalid unit";
	}
};

/**
 * Conversión de centimetros al resto de medidas
 */
const convertFromCm = (unit) => {
	const cm = parseFloat(document.querySelector("#centimeters").value);

	const conversions = {
		mm: cm * 10,
		meter: (cm / 100).toFixed(4),
		km: (cm / 100000).toFixed(2),
		miles: (cm / 160934.4).toFixed(2),
		nauticalMiles: (cm / 185200).toFixed(2),
		inches: (cm / 2.54).toFixed(4),
		yards: (cm / 91.44).toFixed(4),
		feet: (cm / 30.48).toFixed(4),
	};

	if (cm == "") {
		conversions[unit] = null;
	} else {
		return conversions[unit] || "Invalid unit";
	}
};

/**
 * Conversión de metros al resto de medidas
 */

const convertFromMtr = (unit) => {
	const mtr = parseFloat(document.querySelector("#meters").value);

	const conversions = {
		mm: mtr * 1000,
		cm: (mtr * 100).toFixed(2),
		km: (mtr / 1000).toFixed(3),
		miles: (mtr / 1609.34).toFixed(3),
		nauticalMiles: (mtr / 1852).toFixed(3),
		inches: (mtr * 39.37).toFixed(4),
		yards: (mtr * 1.09361).toFixed(4),
		feet: (mtr * 3.281).toFixed(4),
	};
	if (mtr == "") {
		conversions[unit] = null;
	} else {
		return conversions[unit] || "Invalid unit";
	}
};

/**
 * Conversión de kilometros al resto de medidas
 */

const convertFromKm = (unit) => {
	const km = parseFloat(document.querySelector("#kilometers").value);

	const conversions = {
		mm: km * 1000000,
		cm: (km * 100000).toFixed(2),
		meter: (km * 1000).toFixed(2),
		miles: (km / 1.60934).toFixed(5),
		nauticalMiles: (km / 1.852).toFixed(5),
		inches: (km * 39370).toFixed(3),
		yards: (km * 1093.61).toFixed(3),
		feet: (km * 3280.84).toFixed(3),
	};

	if (km == "") {
		conversions[unit] = null;
	} else {
		return conversions[unit] || "Invalid unit";
	}
};

/**
 * Conversión de millas al resto de medidas
 */
const convertFromMiles = (unit) => {
	const miles = parseFloat(document.querySelector("#miles").value);

	const conversions = {
		mm: (miles * 1609340).toFixed(2),
		cm: (miles * 160934).toFixed(2),
		meter: (miles * 1609.34).toFixed(2),
		km: (miles * 1.60934).toFixed(2),
		nauticalMiles: (miles / 1.15).toFixed(4),
		inches: (miles * 63360).toFixed(2),
		yards: (miles * 1760).toFixed(2),
		feet: (miles * 5280).toFixed(2),
	};

	if (miles == "") {
		conversions[unit] = null;
	} else {
		return conversions[unit] || "Invalid unit";
	}
};

/**
 * Conversión de millas nauticas al resto de medidas
 */

const convertFromNauticMiles = (unit) => {
	const nauticalMiles = parseFloat(document.querySelector("#nauticMiles").value);

	const conversions = {
		mm: (nauticalMiles * 1852000).toFixed(2),
		cm: (nauticalMiles * 185200).toFixed(2),
		meter: (nauticalMiles * 1852).toFixed(2),
		km: (nauticalMiles * 1.852).toFixed(4),
		miles: (nauticalMiles * 1.15078).toFixed(4),
		inches: (nauticalMiles * 72913.42).toFixed(2),
		yards: (nauticalMiles * 2025.37).toFixed(2),
		feet: (nauticalMiles * 6076.12).toFixed(2),
	};

	if (nauticalMiles == "") {
		conversions[unit] = null;
	} else {
		return conversions[unit] || "Invalid unit";
	}
};

/**
 * Conversión de pulgadas al resto de medidas
 */
const convertFromInches = (unit) => {
	const inches = parseFloat(document.querySelector("#inches").value);

	const conversions = {
		mm: (inches * 25.4).toFixed(2),
		cm: (inches * 2.54).toFixed(2),
		meter: (inches / 39.37).toFixed(3),
		km: (inches / 39370).toFixed(6),
		miles: (inches / 63360).toFixed(6),
		nauticMiles: (inches / 72910).toFixed(6),
		yards: (inches / 36).toFixed(4),
		feet: (inches / 12).toFixed(4),
	};

	if (inches == "") {
		conversions[unit] = null;
	} else {
		return conversions[unit] || "Invalid unit";
	}
};

/**
 * Conversión de yardas al resto de medidas
 */
const convertFromYards = (unit) => {
	const yards = parseFloat(document.querySelector("#yards").value);

	const conversions = {
		mm: (yards * 914.4).toFixed(2),
		cm: (yards * 91.44).toFixed(2),
		meter: (yards / 1.094).toFixed(4),
		km: (yards / 1094).toFixed(6),
		miles: (yards / 1760).toFixed(6),
		nauticMiles: (yards / 2025).toFixed(6),
		inches: (yards * 36).toFixed(2),
		feet: (yards * 3).toFixed(2),
	};

	if (yards == "") {
		conversions[unit] = null;
	} else {
		return conversions[unit] || "Invalid unit";
	}
};

/**
 * Conversión de pies al resto de medidas
 */

const convertFromFeets = (unit) => {
	const feets = parseFloat(document.querySelector("#feets").value);

	const conversions = {
		mm: (feets * 304.8).toFixed(2),
		cm: (feets * 30.48).toFixed(2),
		meter: (feets / 3.281).toFixed(4),
		km: (feets / 3281).toFixed(6),
		miles: (feets / 5280).toFixed(6),
		nauticMiles: (feets / 6076).toFixed(6),
		inches: (feets * 12).toFixed(2),
		yards: (feets / 3).toFixed(2),
	};

	if (feets == "") {
		conversions[unit] = null;
	} else {
		return conversions[unit] || "Invalid unit";
	}
};

/**
 * Eventos
 */
// MILLIMETERS
millimeters.addEventListener("keyup", () => {
	const inputMm = parseFloat(millimeters.value);

	if (isNaN(inputMm) || inputMm == "") {
		centimeters.value = "";
		meters.value = "";
		kilometers.value = "";
		miles.value = "";
		nauticMiles.value = "";
		inches.value = "";
		yards.value = "";
		feets.value = "";
	} else {
		centimeters.value = convertFromMillimeters("cm") + " cm";
		meters.value = convertFromMillimeters("meter") + " m";
		kilometers.value = convertFromMillimeters("km") + " km";
		miles.value = convertFromMillimeters("miles") + " miles";
		nauticMiles.value = convertFromMillimeters("nauticalMiles") + " nautic miles";
		inches.value = convertFromMillimeters("inches") + " inches";
		yards.value = convertFromMillimeters("yards") + " yards";
		feets.value = convertFromMillimeters("feet") + " feet";
	}
});

// CENTIMETERS
centimeters.addEventListener("keyup", () => {
	const inputCm = parseFloat(centimeters.value);

	if (isNaN(inputCm) || inputCm == "") {
		millimeters.value = "";
		meters.value = "";
		kilometers.value = "";
		miles.value = "";
		nauticMiles.value = "";
		inches.value = "";
		yards.value = "";
		feets.value = "";
	} else {
		millimeters.value = convertFromCm("mm") + " mm";
		meters.value = convertFromCm("meter") + " m";
		kilometers.value = convertFromCm("km") + " km";
		miles.value = convertFromCm("miles") + " miles";
		nauticMiles.value = convertFromCm("nauticalMiles") + " nautic miles";
		inches.value = convertFromCm("inches") + " inches";
		yards.value = convertFromCm("yards") + " yards";
		feets.value = convertFromCm("feet") + " feet";
	}
});

// METERS
meters.addEventListener("keyup", () => {
	const inputMtr = parseFloat(meters.value);

	if (isNaN(inputMtr) || inputMtr == "") {
		millimeters.value = "";
		centimeters.value = "";
		kilometers.value = "";
		miles.value = "";
		nauticMiles.value = "";
		inches.value = "";
		yards.value = "";
		feets.value = "";
	} else {
		millimeters.value = convertFromMtr("mm") + " mm";
		centimeters.value = convertFromMtr("cm") + " cm";
		kilometers.value = convertFromMtr("km") + " km";
		miles.value = convertFromMtr("miles") + " miles";
		nauticMiles.value = convertFromMtr("nauticalMiles") + " nautic miles";
		inches.value = convertFromMtr("inches") + " inches";
		yards.value = convertFromMtr("yards") + " yards";
		feets.value = convertFromMtr("feet") + " feet";
	}
});

// KILOMETERS
kilometers.addEventListener("keyup", () => {
	const inputKm = parseFloat(kilometers.value);

	if (isNaN(inputKm) || inputKm == "") {
		millimeters.value = "";
		centimeters.value = "";
		meters.value = "";
		miles.value = "";
		nauticMiles.value = "";
		inches.value = "";
		yards.value = "";
		feets.value = "";
	} else {
		millimeters.value = convertFromKm("mm") + " mm";
		centimeters.value = convertFromKm("cm") + " cm";
		meters.value = convertFromKm("meter") + " m";
		miles.value = convertFromKm("miles") + " miles";
		nauticMiles.value = convertFromKm("nauticalMiles") + " nautic miles";
		inches.value = convertFromKm("inches") + " inches";
		yards.value = convertFromKm("yards") + " yards";
		feets.value = convertFromKm("feet") + " feet";
	}
});

// MILES
miles.addEventListener("keyup", () => {
	const inputMiles = parseFloat(miles.value);

	if (isNaN(inputMiles) || inputMiles == "") {
		millimeters.value = "";
		centimeters.value = "";
		meters.value = "";
		kilometers.value = "";
		nauticMiles.value = "";
		inches.value = "";
		yards.value = "";
		feets.value = "";
	} else {
		millimeters.value = convertFromMiles("mm") + " mm";
		centimeters.value = convertFromMiles("cm") + " cm";
		meters.value = convertFromMiles("meter") + " m";
		kilometers.value = convertFromMiles("km") + " km";
		nauticMiles.value = convertFromMiles("nauticalMiles") + " nautic miles";
		inches.value = convertFromMiles("inches") + " inches";
		yards.value = convertFromMiles("yards") + " yards";
		feets.value = convertFromMiles("feet") + " feet";
	}
});

// NAUTIC MILES
nauticMiles.addEventListener("keyup", () => {
	const inputNauticMiles = parseFloat(nauticMiles.value);

	if (isNaN(inputNauticMiles) || inputNauticMiles == "") {
		millimeters.value = "";
		centimeters.value = "";
		meters.value = "";
		kilometers.value = "";
		miles.value = "";
		inches.value = "";
		yards.value = "";
		feets.value = "";
	} else {
		millimeters.value = convertFromNauticMiles("mm") + " mm";
		centimeters.value = convertFromNauticMiles("cm") + " cm";
		meters.value = convertFromNauticMiles("meter") + " m";
		kilometers.value = convertFromNauticMiles("km") + " km";
		miles.value = convertFromNauticMiles("miles") + " miles";
		inches.value = convertFromNauticMiles("inches") + " inches";
		yards.value = convertFromNauticMiles("yards") + " yards";
		feets.value = convertFromNauticMiles("feet") + " feet";
	}
});

// INCHES
inches.addEventListener("keyup", () => {
	const inputInches = parseFloat(inches.value);

	if (isNaN(inputInches) || inputInches == "") {
		millimeters.value = "";
		centimeters.value = "";
		meters.value = "";
		kilometers.value = "";
		miles.value = "";
		nauticMiles.value = "";
		yards.value = "";
		feets.value = "";
	} else {
		millimeters.value = convertFromInches("mm") + " mm";
		centimeters.value = convertFromInches("cm") + " cm";
		meters.value = convertFromInches("meter") + " m";
		kilometers.value = convertFromInches("km") + " km";
		miles.value = convertFromInches("miles") + " miles";
		nauticMiles.value = convertFromInches("nauticMiles") + " nautic miles";
		yards.value = convertFromInches("yards") + " yards";
		feets.value = convertFromInches("feet") + " feet";
	}
});

// YARDS
yards.addEventListener("keyup", () => {
	const inputYards = parseFloat(yards.value);

	if (isNaN(inputYards) || inputYards == "") {
		millimeters.value = "";
		centimeters.value = "";
		meters.value = "";
		kilometers.value = "";
		miles.value = "";
		nauticMiles.value = "";
		yards.value = "";
		feets.value = "";
	} else {
		millimeters.value = convertFromYards("mm") + " mm";
		centimeters.value = convertFromYards("cm") + " cm";
		meters.value = convertFromYards("meter") + " m";
		kilometers.value = convertFromYards("km") + " km";
		miles.value = convertFromYards("miles") + " miles";
		nauticMiles.value = convertFromYards("nauticMiles") + " nautic miles";
		inches.value = convertFromYards("inches") + " inches";
		feets.value = convertFromYards("feet") + " feet";
	}
});

// FEETS
feets.addEventListener("keyup", () => {
	const inputFeets = parseFloat(feets.value);

	if (isNaN(inputFeets) || inputFeets == "") {
		millimeters.value = "";
		centimeters.value = "";
		meters.value = "";
		kilometers.value = "";
		miles.value = "";
		nauticMiles.value = "";
		yards.value = "";
		feets.value = "";
	} else {
		millimeters.value = convertFromFeets("mm") + " mm";
		centimeters.value = convertFromFeets("cm") + " cm";
		meters.value = convertFromFeets("meter") + " m";
		kilometers.value = convertFromFeets("km") + " km";
		miles.value = convertFromFeets("miles") + " miles";
		nauticMiles.value = convertFromFeets("nauticMiles") + " nautic miles";
		inches.value = convertFromFeets("inches") + " inches";
		yards.value = convertFromFeets("yards") + " yards";
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
