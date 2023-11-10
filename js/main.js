(() => {
	/*******************************************************************
	 ***************************  BUTTONS  *****************************
	 *******************************************************************/
	const btnReset = document.querySelector("#btnReset");
	const btnDist = document.querySelector("#dist");
	const btnTemp = document.querySelector("#temp");
	const btnMass = document.querySelector("#mass");
	const btnTime = document.querySelector("#time");

	/*******************************************************************
	 ***************************  INPUTS  ******************************
	 *******************************************************************/

	// Distance
	const millimeters = document.querySelector("#millimeters");
	const centimeters = document.querySelector("#centimeters");
	const meters = document.querySelector("#meters");
	const kilometers = document.querySelector("#kilometers");
	const miles = document.querySelector("#miles");
	const nauticMiles = document.querySelector("#nauticMiles");
	const inches = document.querySelector("#inches");
	const yards = document.querySelector("#yards");
	const feets = document.querySelector("#feets");
	// Mass
	const milligrams = document.querySelector("#milligrams");
	const grams = document.querySelector("#grams");
	const kilograms = document.querySelector("#kilograms");
	const tons = document.querySelector("#tons");
	const pounds = document.querySelector("#pounds");
	const ounces = document.querySelector("#ounces");
	// Temperature
	const celsius = document.querySelector("#celsius");
	const fahren = document.querySelector("#fahren");
	const kelvin = document.querySelector("#kelvin");
	// Time
	const milliseconds = document.querySelector("#milliseconds");
	const seconds = document.querySelector("#seconds");
	const minutes = document.querySelector("#minutes");
	const hours = document.querySelector("#hours");
	const days = document.querySelector("#days");
	const weeks = document.querySelector("#weeks");
	const months = document.querySelector("#months");
	const years = document.querySelector("#years");
	const centuries = document.querySelector("#centuries");

	/*******************************************************************
	 ****************	HIDDEN ELEMENTS FROM HTML  *********************
	 *******************************************************************/
	// Reset Button
	const hiddenResetBtn = document.getElementById("reset__container");
	hiddenResetBtn.style.display = "none";

	// Distance
	const hiddenDist = document.getElementById("dst__group");
	hiddenDist.style.display = "none";

	// Temperature
	const hiddenTemp = document.getElementById("temp__group");
	hiddenTemp.style.display = "none";

	// Mass
	const hiddenMass = document.getElementById("mass__group");
	hiddenMass.style.display = "none";

	// Time
	const hiddenTime = document.getElementById("time__group");
	hiddenTime.style.display = "none";

	/*******************************************************************
	 *******************  SHOW ELEMENTS FROM HTML  *********************
	 *******************************************************************/
	// Distance
	btnDist.addEventListener("click", function () {
		hiddenDist.style.display = "flex";
		hiddenResetBtn.style.display = "flex";
		hiddenTemp.style.display = "none";
		hiddenMass.style.display = "none";
		hiddenTime.style.display = "none";
	});
	// Temperature
	btnTemp.addEventListener("click", function () {
		hiddenTemp.style.display = "block";
		hiddenResetBtn.style.display = "flex";
		hiddenMass.style.display = "none";
		hiddenDist.style.display = "none";
		hiddenTime.style.display = "none";
	});
	// Mass
	btnMass.addEventListener("click", function () {
		hiddenMass.style.display = "flex";
		hiddenResetBtn.style.display = "flex";
		hiddenTemp.style.display = "none";
		hiddenDist.style.display = "none";
		hiddenTime.style.display = "none";
	});
	// Time
	btnTime.addEventListener("click", function () {
		hiddenTime.style.display = "flex";
		hiddenResetBtn.style.display = "flex";
		hiddenTemp.style.display = "none";
		hiddenDist.style.display = "none";
		hiddenMass.style.display = "none";
	});

	/*******************************************************************
	 **************************  FUNCTIONS  ****************************
	 *******************************************************************/

	// DISTANCE
	// Millimeters
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

	// Centimeters
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

	// Meters
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

	// Kilometers
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

	// Miles
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

	// Nautic Miles
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

	// Inches
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

	// Yards
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

	// Feets
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

	// TEMPERATURE
	// Celsius
	const convCelsiusFahren = () => {
		let grCelsiusFahren = document.querySelector("#celsius").value;

		if (grCelsiusFahren == "") {
			let fahren = (grCelsiusFahren * 9) / 5 + 32;
			return fahren.toFixed(2);
		} else {
			grCelsiusFahren = parseFloat(grCelsiusFahren);
			let fahren = (grCelsiusFahren * 9) / 5 + 32;
			return fahren.toFixed(2);
		}
	};

	const convCelsiusKelvin = () => {
		let grCelsiusKelvin = document.querySelector("#celsius").value;
		let celsius;

		if (grCelsiusKelvin == "") {
			celsius = 0;
			let kelvin = celsius + 273.15;
			return kelvin.toFixed(2);
		} else {
			celsius = parseFloat(grCelsiusKelvin);
			let kelvin = celsius + 273.15;
			return kelvin.toFixed(2);
		}
	};

	// Fahrenheit
	const convFahrenCelsius = () => {
		let grFahrenCelsius = document.querySelector("#fahren").value;

		if (grFahrenCelsius == "") {
			grFahrenCelsius = 0;
		} else {
			grFahrenCelsius = parseFloat(grFahrenCelsius);
		}
		let celsius = (grFahrenCelsius - 32) * 5;
		return (celsius / 9).toFixed(2);
	};

	const convFahrenKelvin = () => {
		let grFahrenKelvin = document.querySelector("#fahren").value;

		if (grFahrenKelvin == "") {
			grFahrenKelvin = 0;
		} else {
			grFahrenKelvin = parseFloat(grFahrenKelvin);
		}
		let kelvin = (grFahrenKelvin - 32) * 5;
		return (kelvin / 9 + 273.15).toFixed(2);
	};

	// Kelvin
	const convKelvinCelsius = () => {
		let grKelvinCelsius = document.querySelector("#kelvin").value;

		if (grKelvinCelsius == "") {
			grKelvinCelsius = 0;
		} else {
			grKelvinCelsius = parseFloat(grKelvinCelsius);
		}
		let celsius = grKelvinCelsius - 273.15;
		return celsius.toFixed(2);
	};

	const convKelvinFahren = () => {
		let grKelvinFahren = document.querySelector("#kelvin").value;

		if (grKelvinFahren == "") {
			grKelvinFahren = 0;
		} else {
			grKelvinFahren = parseFloat(grKelvinFahren);
		}
		let fahren = ((grKelvinFahren - 273.15) * 9) / 5 + 32;
		return fahren.toFixed(2);
	};

	// MASS
	// Milligrmas
	const convertFromMilligrams = (unit) => {
		const mlg = parseFloat(document.querySelector("#milligrams").value);

		const conversions = {
			gr: (mlg / 1000).toFixed(4),
			kg: (mlg / 1000000).toFixed(7),
			tons: (mlg / 1000000000).toFixed(10),
			pounds: (mlg / 453600).toFixed(8),
			ounces: (mlg / 28350).toFixed(8),
		};
		if (mlg == "") {
			conversions[unit] = null;
		} else {
			return conversions[unit] || "Invalid unit";
		}
	};

	// Grams
	const convertFromGr = (unit) => {
		const gr = parseFloat(document.querySelector("#grams").value);

		const conversions = {
			mlg: gr * 1000,
			kg: (gr / 1000).toFixed(4),
			tons: (gr / 1000000).toFixed(7),
			pounds: (gr / 453.6).toFixed(6),
			ounces: (gr / 28.35).toFixed(4),
		};

		if (gr == "") {
			conversions[unit] = null;
		} else {
			return conversions[unit] || "Invalid unit";
		}
	};

	// Kilograms
	const convertFromKg = (unit) => {
		const kg = parseFloat(document.querySelector("#kilograms").value);

		const conversions = {
			mlg: kg * 1000000,
			gr: (kg * 1000).toFixed(2),
			tons: (kg / 1000).toFixed(4),
			pounds: (kg * 2.205).toFixed(4),
			ounces: (kg * 35.274).toFixed(4),
		};
		if (kg == "") {
			conversions[unit] = null;
		} else {
			return conversions[unit] || "Invalid unit";
		}
	};

	// Tons
	const convertFromTons = (unit) => {
		const tons = parseFloat(document.querySelector("#tons").value);

		const conversions = {
			mlg: tons * 1000000000,
			gr: (tons * 1000000).toFixed(2),
			kg: (tons * 1000).toFixed(2),
			pounds: (tons * 2205).toFixed(2),
			ounces: (tons * 35270).toFixed(2),
		};

		if (tons == "") {
			conversions[unit] = null;
		} else {
			return conversions[unit] || "Invalid unit";
		}
	};

	// Pounds
	const convertFromPounds = (unit) => {
		const pounds = parseFloat(document.querySelector("#pounds").value);

		const conversions = {
			mlg: (pounds * 453600).toFixed(2),
			gr: (pounds * 453.6).toFixed(2),
			kg: (pounds / 2.205).toFixed(4),
			tons: (pounds / 2205).toFixed(5),
			ounces: (pounds * 16).toFixed(3),
		};

		if (pounds == "") {
			conversions[unit] = null;
		} else {
			return conversions[unit] || "Invalid unit";
		}
	};

	// Ounces
	const convertFromOunces = (unit) => {
		const ounces = parseFloat(document.querySelector("#ounces").value);

		const conversions = {
			mlg: (ounces * 28350).toFixed(2),
			gr: (ounces * 28.35).toFixed(2),
			kg: (ounces / 35.274).toFixed(4),
			tons: (ounces / 35270).toFixed(6),
			pounds: (ounces / 16).toFixed(4),
		};

		if (ounces == "") {
			conversions[unit] = null;
		} else {
			return conversions[unit] || "Invalid unit";
		}
	};

	// TIME
	// Milliseconds
	const convertFromMilliseconds = (unit) => {
		const mls = parseFloat(document.querySelector("#milliseconds").value);

		const conversions = {
			secs: mls / 1000,
			min: (mls / 60000).toFixed(7),
			hrs: (mls / 3600000).toFixed(8),
			days: (mls / 86400000).toFixed(8),
			weeks: (mls / 604800000).toFixed(9),
			months: (mls / 2628000000).toFixed(10),
			years: (mls / 31540000000).toFixed(12),
			centuries: (mls / 3154000000000).toFixed(13),
		};
		if (mls == "") {
			conversions[unit] = null;
		} else {
			return conversions[unit] || "Invalid unit";
		}
	};

	// Seconds
	const convertFromSecs = (unit) => {
		const secs = parseFloat(document.querySelector("#seconds").value);

		const conversions = {
			mls: secs * 1000,
			min: (secs / 60).toFixed(2),
			hrs: (secs / 3600).toFixed(4),
			days: (secs / 86400).toFixed(5),
			weeks: (secs / 604800).toFixed(6),
			months: (secs / 2628000).toFixed(8),
			years: (secs / 31540000).toFixed(9),
			centuries: (secs / 3154000000).toFixed(10),
		};

		if (secs == "") {
			conversions[unit] = null;
		} else {
			return conversions[unit] || "Invalid unit";
		}
	};

	// Minutes
	const convertFromMin = (unit) => {
		const min = parseFloat(document.querySelector("#minutes").value);

		const conversions = {
			mls: min * 60000,
			secs: (min * 60).toFixed(2),
			hrs: (min / 60).toFixed(3),
			days: (min / 1440).toFixed(5),
			weeks: (min / 10080).toFixed(6),
			months: (min / 43800).toFixed(6),
			years: (min / 525600).toFixed(6),
			centuries: (min / 52560000).toFixed(8),
		};
		if (min == "") {
			conversions[unit] = null;
		} else {
			return conversions[unit] || "Invalid unit";
		}
	};

	// Hours
	const convertFromHrs = (unit) => {
		const hrs = parseFloat(document.querySelector("#hours").value);

		const conversions = {
			mls: hrs * 3600000,
			secs: (hrs * 3600).toFixed(2),
			min: (hrs * 60).toFixed(2),
			days: (hrs / 24).toFixed(5),
			weeks: (hrs / 168).toFixed(5),
			months: (hrs / 730).toFixed(6),
			years: (hrs / 8760).toFixed(6),
			centuries: (hrs / 876000).toFixed(8),
		};

		if (hrs == "") {
			conversions[unit] = null;
		} else {
			return conversions[unit] || "Invalid unit";
		}
	};

	// Days
	const convertFromDays = (unit) => {
		const days = parseFloat(document.querySelector("#days").value);

		const conversions = {
			mls: (days * 86400000).toFixed(2),
			secs: (days * 86400).toFixed(2),
			min: (days * 1440).toFixed(2),
			hrs: (days * 24).toFixed(2),
			weeks: (days / 7).toFixed(4),
			months: (days / 30).toFixed(4),
			years: (days / 365).toFixed(6),
			centuries: (days / 36500).toFixed(6),
		};

		if (days == "") {
			conversions[unit] = null;
		} else {
			return conversions[unit] || "Invalid unit";
		}
	};

	// Weeks
	const convertFromWeeks = (unit) => {
		const weeks = parseFloat(document.querySelector("#weeks").value);

		const conversions = {
			mls: (weeks * 604800000).toFixed(2),
			secs: (weeks * 604800).toFixed(2),
			min: (weeks * 10080).toFixed(2),
			hrs: (weeks * 168).toFixed(2),
			days: (weeks * 7).toFixed(2),
			months: (weeks / 4.2857).toFixed(4),
			years: (weeks / 52.143).toFixed(4),
			centuries: (weeks / 5214.3).toFixed(6),
		};

		if (weeks == "") {
			conversions[unit] = null;
		} else {
			return conversions[unit] || "Invalid unit";
		}
	};

	// Months
	const convertFromMonths = (unit) => {
		const months = parseFloat(document.querySelector("#months").value);

		const conversions = {
			mls: (months * 2628000000).toFixed(2),
			secs: (months * 2628000).toFixed(2),
			min: (months * 43200).toFixed(2),
			hrs: (months * 720).toFixed(2),
			days: (months * 30).toFixed(2),
			weeks: (months * 4.2857).toFixed(3),
			years: (months / 12).toFixed(6),
			centuries: (months / 1200).toFixed(6),
		};

		if (months == "") {
			conversions[unit] = null;
		} else {
			return conversions[unit] || "Invalid unit";
		}
	};

	// Years
	const convertFromYears = (unit) => {
		const years = parseFloat(document.querySelector("#years").value);

		const conversions = {
			mls: (years * 31540000000).toFixed(2),
			secs: (years * 31540000).toFixed(2),
			min: (years * 525600).toFixed(2),
			hrs: (years * 8760).toFixed(2),
			days: (years * 365).toFixed(2),
			weeks: (years * 52.143).toFixed(2),
			months: (years * 12).toFixed(2),
			centuries: (years / 100).toFixed(2),
		};

		if (years == "") {
			conversions[unit] = null;
		} else {
			return conversions[unit] || "Invalid unit";
		}
	};

	// Centuries
	const convertFromCenturies = (unit) => {
		const centuries = parseFloat(document.querySelector("#centuries").value);

		const conversions = {
			mls: (centuries * 3154000000000).toFixed(2),
			secs: (centuries * 3154000000).toFixed(2),
			min: (centuries * 52560000).toFixed(2),
			hrs: (centuries * 876000).toFixed(2),
			days: (centuries * 36500).toFixed(2),
			weeks: (centuries * 5214).toFixed(2),
			months: (centuries * 1200).toFixed(2),
			years: (centuries * 100).toFixed(2),
		};

		if (centuries == "") {
			conversions[unit] = null;
		} else {
			return conversions[unit] || "Invalid unit";
		}
	};

	/*******************************************************************
	 *************************  FUNCTION CALLS  ************************
	 *******************************************************************/

	// DISTANCE
	// Millimeters
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
			centimeters.value = convertFromMillimeters("cm");
			meters.value = convertFromMillimeters("meter");
			kilometers.value = convertFromMillimeters("km");
			miles.value = convertFromMillimeters("miles");
			nauticMiles.value = convertFromMillimeters("nauticalMiles");
			inches.value = convertFromMillimeters("inches");
			yards.value = convertFromMillimeters("yards");
			feets.value = convertFromMillimeters("feet");
		}
	});

	// Centimeters
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

	// Meters
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

	// Kilometers
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

	// Miles
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

	// Nautic Miles
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

	// Inches
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

	// Yards
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

	// Feets
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

	// TEMPERATURE
	// Celsius
	celsius.addEventListener("keyup", function () {
		if (document.querySelector("#celsius").value === "-" || document.querySelector("#celsius").value === "") {
			fahren.value = "";
			kelvin.value = "";
		} else {
			let resCelsiusFahren = convCelsiusFahren();
			fahren.value = `${resCelsiusFahren} ºF`;

			let resCelsiusKelvin = convCelsiusKelvin();
			kelvin.value = `${resCelsiusKelvin} ºK`;
		}
	});

	// Fahrenheit
	fahren.addEventListener("keyup", function () {
		if (document.querySelector("#fahren").value === "-" || document.querySelector("#fahren").value === "") {
			celsius.value = "";
			kelvin.value = "";
		} else {
			let resFahrenCelsius = convFahrenCelsius();
			celsius.value = `${resFahrenCelsius} ºC`;

			let resFahrenKelvin = convFahrenKelvin();
			kelvin.value = `${resFahrenKelvin} ºK`;
		}
	});

	// Kelvin
	kelvin.addEventListener("keyup", function () {
		if (document.querySelector("#kelvin").value === "-" || document.querySelector("#kelvin").value === "") {
			celsius.value = "";
			fahren.value = "";
		} else {
			let resKelvinCelsius = convKelvinCelsius();
			celsius.value = `${resKelvinCelsius} ºC`;

			let resKelvinFahren = convKelvinFahren();
			fahren.value = `${resKelvinFahren} ºF`;
		}
	});

	// MASS
	// Milligrams
	milligrams.addEventListener("keyup", () => {
		const inputMlg = parseFloat(milligrams.value);

		if (isNaN(inputMlg) || inputMlg == "") {
			grams.value = "";
			kilograms.value = "";
			tons.value = "";
			pounds.value = "";
			ounces.value = "";
		} else {
			grams.value = convertFromMilligrams("gr");
			kilograms.value = convertFromMilligrams("kg");
			tons.value = convertFromMilligrams("tons");
			pounds.value = convertFromMilligrams("pounds");
			ounces.value = convertFromMilligrams("ounces");
		}
	});

	// Grams
	grams.addEventListener("keyup", () => {
		const inputGr = parseFloat(grams.value);

		if (isNaN(inputGr) || inputGr == "") {
			milligrams.value = "";
			kilograms.value = "";
			tons.value = "";
			pounds.value = "";
			ounces.value = "";
		} else {
			milligrams.value = convertFromGr("mlg");
			kilograms.value = convertFromGr("kg");
			tons.value = convertFromGr("tons");
			pounds.value = convertFromGr("pounds");
			ounces.value = convertFromGr("ounces");
		}
	});

	// Kilograms
	kilograms.addEventListener("keyup", () => {
		const inputKg = parseFloat(kilograms.value);

		if (isNaN(inputKg) || inputKg == "") {
			milligrams.value = "";
			grams.value = "";
			tons.value = "";
			pounds.value = "";
			ounces.value = "";
		} else {
			milligrams.value = convertFromKg("mlg");
			grams.value = convertFromKg("gr");
			tons.value = convertFromKg("tons");
			pounds.value = convertFromKg("pounds");
			ounces.value = convertFromKg("ounces");
		}
	});

	// Tons
	tons.addEventListener("keyup", () => {
		const inputTons = parseFloat(tons.value);

		if (isNaN(inputTons) || inputTons == "") {
			milligrams.value = "";
			grams.value = "";
			kilograms.value = "";
			pounds.value = "";
			ounces.value = "";
		} else {
			milligrams.value = convertFromTons("mlg");
			grams.value = convertFromTons("gr");
			kilograms.value = convertFromTons("kg");
			pounds.value = convertFromTons("pounds");
			ounces.value = convertFromTons("ounces");
		}
	});

	// Pounds
	pounds.addEventListener("keyup", () => {
		const inputPounds = parseFloat(pounds.value);

		if (isNaN(inputPounds) || inputPounds == "") {
			milligrams.value = "";
			grams.value = "";
			kilograms.value = "";
			tons.value = "";
			ounces.value = "";
		} else {
			milligrams.value = convertFromPounds("mlg");
			grams.value = convertFromPounds("gr");
			kilograms.value = convertFromPounds("kg");
			tons.value = convertFromPounds("tons");
			ounces.value = convertFromPounds("ounces");
		}
	});

	// Ounces
	ounces.addEventListener("keyup", () => {
		const inputOunces = parseFloat(ounces.value);

		if (isNaN(inputOunces) || inputOunces == "") {
			milligrams.value = "";
			grams.value = "";
			kilograms.value = "";
			tons.value = "";
			pounds.value = "";
		} else {
			milligrams.value = convertFromOunces("mlg");
			grams.value = convertFromOunces("gr");
			kilograms.value = convertFromOunces("kg");
			tons.value = convertFromOunces("tons");
			pounds.value = convertFromOunces("pounds");
		}
	});

	// TIME
	// Milliseconds
	milliseconds.addEventListener("keyup", () => {
		const inputMs = parseFloat(milliseconds.value);

		if (isNaN(inputMs) || inputMs == "") {
			seconds.value = "";
			minutes.value = "";
			hours.value = "";
			days.value = "";
			weeks.value = "";
			months.value = "";
			years.value = "";
			centuries.value = "";
		} else {
			seconds.value = convertFromMilliseconds("secs");
			minutes.value = convertFromMilliseconds("min");
			hours.value = convertFromMilliseconds("hrs");
			days.value = convertFromMilliseconds("days");
			weeks.value = convertFromMilliseconds("weeks");
			months.value = convertFromMilliseconds("months");
			years.value = convertFromMilliseconds("years");
			centuries.value = convertFromMilliseconds("centuries");
		}
	});

	// Seconds
	seconds.addEventListener("keyup", () => {
		const inputSecs = parseFloat(seconds.value);

		if (isNaN(inputSecs) || inputSecs == "") {
			milliseconds.value = "";
			minutes.value = "";
			hours.value = "";
			days.value = "";
			weeks.value = "";
			months.value = "";
			years.value = "";
			centuries.value = "";
		} else {
			milliseconds.value = convertFromSecs("mls");
			minutes.value = convertFromSecs("min");
			hours.value = convertFromSecs("hrs");
			days.value = convertFromSecs("days");
			weeks.value = convertFromSecs("weeks");
			months.value = convertFromSecs("months");
			years.value = convertFromSecs("years");
			centuries.value = convertFromSecs("centuries");
		}
	});

	// Minutes
	minutes.addEventListener("keyup", () => {
		const inputMin = parseFloat(minutes.value);

		if (isNaN(inputMin) || inputMin == "") {
			milliseconds.value = "";
			seconds.value = "";
			hours.value = "";
			days.value = "";
			weeks.value = "";
			months.value = "";
			years.value = "";
			centuries.value = "";
		} else {
			milliseconds.value = convertFromMin("mls");
			seconds.value = convertFromMin("secs");
			hours.value = convertFromMin("hrs");
			days.value = convertFromMin("days");
			weeks.value = convertFromMin("weeks");
			months.value = convertFromMin("months");
			years.value = convertFromMin("years");
			centuries.value = convertFromMin("centuries");
		}
	});

	// Hours
	hours.addEventListener("keyup", () => {
		const inputHrs = parseFloat(hours.value);

		if (isNaN(inputHrs) || inputHrs == "") {
			milliseconds.value = "";
			seconds.value = "";
			minutes.value = "";
			days.value = "";
			weeks.value = "";
			months.value = "";
			years.value = "";
			centuries.value = "";
		} else {
			milliseconds.value = convertFromHrs("mls");
			seconds.value = convertFromHrs("secs");
			minutes.value = convertFromHrs("min");
			days.value = convertFromHrs("days");
			weeks.value = convertFromHrs("weeks");
			months.value = convertFromHrs("months");
			years.value = convertFromHrs("years");
			centuries.value = convertFromHrs("centuries");
		}
	});

	// Days
	days.addEventListener("keyup", () => {
		const inputDays = parseFloat(days.value);

		if (isNaN(inputDays) || inputDays == "") {
			milliseconds.value = "";
			seconds.value = "";
			minutes.value = "";
			hours.value = "";
			weeks.value = "";
			months.value = "";
			years.value = "";
			centuries.value = "";
		} else {
			milliseconds.value = convertFromDays("mls");
			seconds.value = convertFromDays("secs");
			minutes.value = convertFromDays("min");
			hours.value = convertFromDays("hrs");
			weeks.value = convertFromDays("weeks");
			months.value = convertFromDays("months");
			years.value = convertFromDays("years");
			centuries.value = convertFromDays("centuries");
		}
	});

	// Weeks
	weeks.addEventListener("keyup", () => {
		const inputWeeks = parseFloat(weeks.value);

		if (isNaN(inputWeeks) || inputWeeks == "") {
			milliseconds.value = "";
			seconds.value = "";
			minutes.value = "";
			hours.value = "";
			days.value = "";
			months.value = "";
			years.value = "";
			centuries.value = "";
		} else {
			milliseconds.value = convertFromWeeks("mls");
			seconds.value = convertFromWeeks("secs");
			minutes.value = convertFromWeeks("min");
			hours.value = convertFromWeeks("hrs");
			days.value = convertFromWeeks("days");
			months.value = convertFromWeeks("months");
			years.value = convertFromWeeks("years");
			centuries.value = convertFromWeeks("centuries");
		}
	});

	// Months
	months.addEventListener("keyup", () => {
		const inputMonths = parseFloat(months.value);

		if (isNaN(inputMonths) || inputMonths == "") {
			milliseconds.value = "";
			seconds.value = "";
			minutes.value = "";
			hours.value = "";
			days.value = "";
			weeks.value = "";
			years.value = "";
			centuries.value = "";
		} else {
			milliseconds.value = convertFromMonths("mls");
			seconds.value = convertFromMonths("secs");
			minutes.value = convertFromMonths("min");
			hours.value = convertFromMonths("hrs");
			days.value = convertFromMonths("days");
			weeks.value = convertFromMonths("weeks");
			years.value = convertFromMonths("years");
			centuries.value = convertFromMonths("centuries");
		}
	});

	// Years
	years.addEventListener("keyup", () => {
		const inputYears = parseFloat(years.value);

		if (isNaN(inputYears) || inputYears == "") {
			milliseconds.value = "";
			seconds.value = "";
			minutes.value = "";
			hours.value = "";
			days.value = "";
			weeks.value = "";
			years.value = "";
			centuries.value = "";
		} else {
			milliseconds.value = convertFromYears("mls");
			seconds.value = convertFromYears("secs");
			minutes.value = convertFromYears("min");
			hours.value = convertFromYears("hrs");
			days.value = convertFromYears("days");
			weeks.value = convertFromYears("weeks");
			months.value = convertFromYears("months");
			centuries.value = convertFromYears("centuries");
		}
	});

	// Centuries
	centuries.addEventListener("keyup", () => {
		const inputCenturies = parseFloat(centuries.value);

		if (isNaN(inputCenturies) || inputCenturies == "") {
			milliseconds.value = "";
			seconds.value = "";
			minutes.value = "";
			hours.value = "";
			days.value = "";
			weeks.value = "";
			years.value = "";
			centuries.value = "";
		} else {
			milliseconds.value = convertFromCenturies("mls");
			seconds.value = convertFromCenturies("secs");
			minutes.value = convertFromCenturies("min");
			hours.value = convertFromCenturies("hrs");
			days.value = convertFromCenturies("days");
			weeks.value = convertFromCenturies("weeks");
			months.value = convertFromCenturies("months");
			years.value = convertFromCenturies("years");
		}
	});

	/*******************************************************************
	 *************************  RESET INPUTS  **************************
	 *******************************************************************/
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
		milligrams.value = "";
		grams.value = "";
		kilograms.value = "";
		tons.value = "";
		pounds.value = "";
		ounces.value = "";
		celsius.value = "";
		fahren.value = "";
		kelvin.value = "";
		milliseconds.value = "";
		seconds.value = "";
		minutes.value = "";
		hours.value = "";
		days.value = "";
		weeks.value = "";
		months.value = "";
		years.value = "";
		centuries.value = "";
	});
})();
