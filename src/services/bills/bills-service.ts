import { IBill } from "../../types/models/bill.types";
import { bills } from "../../models";
import StatusError from "../../utils/error-util";
import { isValidDate } from "../../config/validators";

/**
 * This method used to create a new bill
 * @param bill - bill object of type IBill with the details of bill
 */
 export const createBill = (bill: IBill) => {
    if(!bill.patientName || !bill.amount || !bill.dateOfService || !bill.hospitalName || (bill.patientName && bill.patientName.trim() === "") || (bill.hospitalName && bill.hospitalName.trim() === "")){
      const error = new StatusError("Patient Name, Hospital Name, Date of Service and amount cannot be empty");
      error.status = 400;
      throw error;
    }
    if(!isValidDate(bill.dateOfService.toString())){
      const error = new StatusError("Please enter valid date format");
      error.status = 400;
      throw error;
    }
    bill.dateOfService = new Date(bill.dateOfService);
    bills.addBill(bill);
    return bills.getBills();
  };

/**
 * This method returns a list of bills
 */
  export const getBills = () => {
    return bills.getBills();
  }