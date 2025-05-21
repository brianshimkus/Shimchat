import express from 'express'

const app = express()
const PORT = process.env.PORT || 5002

app.use(express.json())

const startServer = () => {
	app.listen(PORT, () => {
		console.log(`🚀 Server is running on port ${PORT}`)
	})
}

startServer()
