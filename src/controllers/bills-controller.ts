import { CustomResponse, CustomRequest } from '../types/config/express-types';
import * as billsService from '../services/bills/bills-service';
import { setResponse, setError } from '../utils/http-utils';
import { IBill } from '../types/models/bill.types';

/**
 * It creates a user and returns the user object in the response
 * @param req - Http Request with <IUser> as body
 * @param {CustomResponse} response - CustomResponse - This is the response object that will be sent
 * back to the client.
 */
 export const createBill = async (
    req: CustomRequest<IBill>,
    response: CustomResponse
  ) => {
    try {
      const user = await billsService.createBill(req.body);
      setResponse(response, user);
    } catch (err) {
      setError(response, err);
    }
  };


/**
 * This is used to get the user details based on the access token
 * @param req - Http Request with <IUser> as body
 * @param {CustomResponse} response - CustomResponse - This is the response object that will be sent
 * back to the client.
 */
export const getBills = async(req: CustomRequest<IBill>, response: CustomResponse) => {
    try {
        const user = await billsService.getBills();
        setResponse(response, user);
    } catch (err) {
        setError(response, err);
    }
}