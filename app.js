const express = require('express')
const app = express()
const {models: {Movie}} = require('./db')


app.get('/', (req, res, next) => {
    try {
        res.send(`
            <html>
                <body>
                    <h1>ACME Movie API</h2>
                </body>
            </html>
        `)
    } catch (err) {
        next(err)
    }
})

app.get('/api/movies', async(req, res, next) => {
    try {
        res.send(await Movie.findAll())
    } catch (err) {
        next(err)
    }
})











module.exports = app