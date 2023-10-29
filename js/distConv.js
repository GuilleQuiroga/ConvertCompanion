// Botones
const btnMtrKm = document.querySelector("#btnMtrKm");

// Medidas
const kilometros = document.querySelector("#km__out");

/**
 * Conversión de metros a kilometros
 * @returns km
 */
const metrosKilometros = () => {
	let metros = document.querySelector("#mtr__in").value;
	let km = metros / 1000;
	return km;
};

btnMtrKm.addEventListener("click", () => {
	let resKilometros = metrosKilometros();
	kilometros.value = `${resKilometros} Km.`;
});
