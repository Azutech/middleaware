import express, { NextFunction, Request, Response} from 'express';

import morgan from 'morgan';

const feederRoutes = express.Router();


feederRoutes.use(morgan("common"))

feederRoutes.get('/feederRoutes',(req: Request, res: Response, next: NextFunction) => {
    res.status(200).send('The feeders are being the heat to the server')
})

export default feederRoutes