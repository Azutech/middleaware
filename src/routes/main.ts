import express, { NextFunction, Request, Response} from 'express'
import { request } from 'http';
import diapersRoutes from './baby routes/diapers';
import feederRoutes from './baby routes/feeder';

const routes = express.Router();

const logger = (req:express.Request , res:express.Response, next: express.NextFunction) =>{
    console.log('Logger bring the baby routes to the server')

    next()
}
routes.use('/', logger, ( req:express.Request, res:express.Response) => {
    res.send()
})

routes.use('/', diapersRoutes)

routes.use('/', feederRoutes)

export default routes









