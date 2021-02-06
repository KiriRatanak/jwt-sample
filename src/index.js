import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

let corsOptions = {
	origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.json({ message: 'Hello there' })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})