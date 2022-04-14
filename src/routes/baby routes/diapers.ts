import express, {NextFunction, Request, Response} from 'express';
import { appendFile } from 'fs';

import morgan from 'morgan';


const diapersRoutes = express.Router();


diapersRoutes.use(morgan('combined'));

diapersRoutes.get('/diapersRoutes', (req:Request, res:Response, next:NextFunction)  =>{
    res.status(200).send('The diapers are live on the server');
})



export default diapersRoutes;