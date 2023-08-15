//Validamos que el dia no sea mayor a 31, el mes no sea mayor a 12 y los años tengan 4 digitos
export const DAY_REGEX = /0[1-9]|[12][0-9]|3[01]/gm;
export const MONTH_REGEX = /0[1-9]|1[0-2]/gm;
export const YEAR_REGEX = /^[0-9]{4}$/gm;
