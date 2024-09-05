import express from 'express'
import { config } from 'dotenv'

import routes from './routes/index.routes.js'

config ()

const serverPort = process.env.PORT

const app = express()

app.use(express.json())

app.use(routes)



app.listen(serverPort, () => {
    console.log(`😍 Server started on http://localhost:${serverPort}`)
})