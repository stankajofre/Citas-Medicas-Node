import express from 'express'
const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
})
const PORTt = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})