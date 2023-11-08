// Botones
const btnReset = document.querySelector("#btnReset");

// Medidas
const milliseconds = document.querySelector("#milliseconds");
const seconds = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");
const hours = document.querySelector("#hours");
const days = document.querySelector("#days");
const weeks = document.querySelector("#weeks");
const months = document.querySelector("#months");
const years = document.querySelector("#years");
const centuries = document.querySelector("#centuries");

/**
 * Conversión de milisegundos al resto de medidas
 */
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

/**
 * Conversión de segundos al resto de medidas
 */
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

/**
 * Conversión de minutos al resto de medidas
 */

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

/**
 * Conversión de horas al resto de medidas
 */

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

/**
 * Conversión de días al resto de medidas
 */
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

/**
 * Conversión de semanas al resto de medidas
 */

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

/**
 * Conversión de meses al resto de medidas
 */
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

/**
 * Conversión de años al resto de medidas
 */
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

/**
 * Conversión de siglos al resto de medidas
 */

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

/**
 * Eventos
 */
// MILLISECONDS
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

// SECONDS
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

// MINUTES
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

// HOURS
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

// DAYS
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

// WEEKS
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

// MONTHS
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

// YEARS
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

// CENTURIES
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

// Reset de los inputs
btnReset.addEventListener("click", function () {
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
