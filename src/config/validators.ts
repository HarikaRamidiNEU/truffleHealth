import validator from 'validator';

/**
 * Validates whether the given value is not null or undefined.
 *
 * @param value value to be validated.
 * @returns true, if the value is not null or undefined.
 */
export const isValid = (value: any) => {
    return value !== null && value !== undefined;
}

/**
 * Validates whether the given date is valid date or not
 * @param date date to be validated
 * @returns true, if the date is valid
 */
export const isValidDate = (date: string) => {
    return validator.isDate(date);
}