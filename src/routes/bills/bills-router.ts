
import express from 'express';
import * as bills from "../../controllers/bills-controller";

const router = express.Router();

// getBill Route
router.route('/items').get(bills.getBills);


// Create a new bill Route
router.route('/items').post(bills.createBill);

export default router;