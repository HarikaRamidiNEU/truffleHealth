import { IBill } from '../../types/models/bill.types';
import {v4 as uuidv4} from 'uuid';

const bills: IBill[] = [];

/**
 * This method is used to create a new bill entity and add it to bills array
 * @param bill of type IBill
 */
export const addBill = (bill:IBill) => {
    bill.id = uuidv4();
    const date = new Date();
    bill.createdDate = date;
    bills.push(bill);
}

/**
 * This method is used to retrieve all the bills saved
 * @returns an array of medical bills
 */
export const getBills = () => {
   return bills;
}