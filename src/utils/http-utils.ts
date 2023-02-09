import logger from '../config/logger';
import { CustomResponse } from '../types/config/express-types';

/**
 * Sets the response status code to 200, and then sends the object as a JSON response
 * @param response - The response object that will be sent back to the client.
 * @param obj - The object to be returned to the client.
 */
export const setResponse = (response: CustomResponse, obj: any) => {
    response.status(200);
    response.json(obj);
}

/**
 * Sets the response status to given statuscode (defaults to 500), and then sends the error as a JSON object
 * @param response - the response object that we're going to use to send back a response to the client
 * @param err - The error object that was thrown.
 * @param statusCode - Status code to set.
 */
export const setError = (response: CustomResponse, err: Error, statusCode: number = 500) => {
    logger.error(err.message);
    response.status(statusCode);
    response.json(err);
}