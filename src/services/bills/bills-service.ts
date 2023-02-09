import { IBill } from "../../types/models/bill.types";
import { bills } from "../../models";

/**
 * This method used to create a new user
 * @param user - user object of type IUser with the details of user
 */
 export const createBill = (bill: IBill) => {
    bills.addBill(bill);
    return bills.getBills();
  };

/**
 * This method returns a list of bills
 */
  export const getBills = () => {
    return bills.getBills();
  }