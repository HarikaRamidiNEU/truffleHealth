
import express from 'express';
import * as bills from "../../controllers/bills-controller";

const router = express.Router();

// getUser Route
router.route('/items').get(bills.getBills);


// UpdateProfile Route
router.route('/items').post(bills.createBill);

export default router;