// Botones
const btnTmp = document.querySelector("#btnTmp");
const btnReset = document.querySelector("#btnReset");

// Temperaturas
const celsius = document.querySelector("#celsius");
const fahren = document.querySelector("#fahren");
const kelvin = document.querySelector("#kelvin");

const temps = document.getElementsByClassName(".temps");

/**
 * Conversión de celsius a fahrenheit y a kelvin
 */
const convCelsiusFahren = () => {
	let grCelsiusFahren = document.querySelector("#celsius").value;
	let celsius;

	if (grCelsiusFahren == "") {
		celsius = 0;
		let fahren = (grCelsiusFahren * 9) / 5 + 32;
		return fahren.toFixed(2);
	} else {
		celsius = parseFloat(grCelsiusFahren);
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

/**
 * Conversión de fahrenheit a celsius y a kelvin
 */
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

/**
 * Conversión de kelvin a celsius y a fahrenheit
 */
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
	// return (fahren / 5 + 32).toFixed(2);
	return fahren.toFixed(2);
};

/**
 * Llamada funciones celsius
 *
 * Si solo está escrito el símbolo negativo o el input está vacío,
 * se dejan los demás inputs en blanco
 */

celsius.addEventListener("keyup", function (event) {
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

/**
 * Llamada funciones Fahrenheit
 */

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

/**
 * Llamada funciones Kelvin
 */

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

// Reset de los inputs
btnReset.addEventListener("click", function () {
	celsius.value = "";
	fahren.value = "";
	kelvin.value = "";
});
