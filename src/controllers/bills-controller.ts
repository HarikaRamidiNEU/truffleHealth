import { CustomResponse, CustomRequest } from '../types/config/express-types';
import * as billsService from '../services/bills/bills-service';
import { setResponse, setError } from '../utils/http-utils';
import { IBill } from '../types/models/bill.types';

/**
 * It creates a bill and returns the bills array in the response
 * @param req - Http Request with <IBill> as body
 * @param {CustomResponse} response - CustomResponse - This is the response object that will be sent
 * back to the client.
 */
 export const createBill = async (
    req: CustomRequest<IBill>,
    response: CustomResponse
  ) => {
    try {
      const bill = await billsService.createBill(req.body);
      setResponse(response, bill);
    } catch (err) {
        if(err.status)
            setError(response, err, err.status);
        else
            setError(response, err);
    }
  };


/**
 * This is used to get the bill details based on the access token
 * @param req - Http Request with <IBill> as body
 * @param {CustomResponse} response - CustomResponse - This is the response object that will be sent
 * back to the client.
 */
export const getBills = async(req: CustomRequest<IBill>, response: CustomResponse) => {
    try {
        const bills = await billsService.getBills();
        setResponse(response, bills);
    } catch (err) {
        setError(response, err);
    }
}