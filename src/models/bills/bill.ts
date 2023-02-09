import { IBill } from '../../types/models/bill.types';

const bills: IBill[] = [];
const i = 0;

/**
 * This method is used to create a new bill entity and add it to bills array
 * @param bill of type IBill
 */
export const addBill = (bill:IBill) => {
    bill.id = i+1;
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