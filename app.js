const express = require('express')
const app = express()


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













module.exports = app