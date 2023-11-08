(() => {
	// Botones
	const btnReset = document.querySelector("#btnReset");

	// Medidas
	const milligrams = document.querySelector("#milligrams");
	const grams = document.querySelector("#grams");
	const kilograms = document.querySelector("#kilograms");
	const tons = document.querySelector("#tons");
	const pounds = document.querySelector("#pounds");
	const ounces = document.querySelector("#ounces");

	/**
	 * Conversión de miligramos al resto de medidas
	 */
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

	/**
	 * Conversión de gramos al resto de medidas
	 */
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

	/**
	 * Conversión de kilogramos al resto de medidas
	 */

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

	/**
	 * Conversión de toneladas al resto de medidas
	 */
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

	/**
	 * Conversión de libras al resto de medidas
	 */
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

	/**
	 * Conversión de onzas al resto de medidas
	 */
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

	/**
	 * Eventos
	 */
	// MILLIGRAMS
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

	// GRAMS
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

	// KILOGRAMS
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

	// TONS
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

	// POUNDS
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

	// OUNCES
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

	// Reset de los inputs
	btnReset.addEventListener("click", function () {
		milligrams.value = "";
		grams.value = "";
		kilograms.value = "";
		tons.value = "";
		pounds.value = "";
		ounces.value = "";
	});
})();
