import express from 'express'
import cors from 'cors'

import errorHandler from './middleware/error.js'
import notFound from './middleware/notFound.js'
import sensorValue from './routes/sensorValue.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/', sensorValue)

// Error handler
app.use(notFound)
app.use(errorHandler)

const PORT = 8000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
