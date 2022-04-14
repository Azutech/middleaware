import express from 'express'
import routes from './routes/main'

const app = express()
const port:number = 4000

app.use('/api', routes )

app.listen(port, ()=>{
    console.log(`listening at port ${port}`)
})

export default app;