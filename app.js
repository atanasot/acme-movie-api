const express = require('express')
const app = express()
const {models: {Movie, Actor}} = require('./db')
const path = require('path')
const cors = require('cors') //cors allows us to make an api call to our site from another site

//app.get('/', (req, res)) // get the html file here

app.use(cors())

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

app.get('/api/actors', async(req, res, next) => {
    try {
        res.send(await Actor.findAll())
    } catch (err) {
        next(err)
    }
})











module.exports = app