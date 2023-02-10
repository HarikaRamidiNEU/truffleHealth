import express from 'express';
import cors from 'cors';
import routes from './routes/index';
import logger from './config/logger';

import * as dotenv from 'dotenv';
import session from 'express-session';
/*
 * Port to host the server
 */
const port = 8080;

/**
 * Creating express server
 */
const app = express();
dotenv.config();

// Express Server Middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

// Custom routing
routes(app);

// Enable Server to listen on port
app.listen(port, () => {
    logger.info(`Server listening on port ${port}`);
});

export default app;