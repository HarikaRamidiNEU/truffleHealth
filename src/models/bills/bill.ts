import { IBill } from '../../types/models/bill.types';

const bills: IBill[] = [];

export const addBill = (bill:IBill) => {
    bills.push(bill);
}

export const getBills = () => {
   return bills;
}