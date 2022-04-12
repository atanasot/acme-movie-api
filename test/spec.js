const {expect} = require('chai')
const {syncAndSeed} = require('../db')

const app = require('supertest')(require('../app')) // what is supertest -- it tests express API

describe('the sky', () => {
    describe('the sky is blue', ()=> {
        it('the sky is always blue', ()=> {
            console.log('the sky is green')
        })
    })
})

describe('Routes', ()=> {
    before(() => syncAndSeed()) // no await here, we dont want a promise
    describe('GET /', ()=> {
        it('this is the ACME Movie API page', async()=> {
            const response = await app.get('/')
            expect(response.status).to.equal(200)
            expect(response.text).to.include('ACME Movie API')
        })
    })
    describe('GET /api/movies', ()=> {
        it('returns movies', async()=> {
            const response = await app.get('/api/movies')
            expect(response.status).to.equal(200)
            expect(response.body.length).to.equal(4)
        })
    })
    describe('GET /api/actors', ()=> {
        it('returns actors', async()=> {
            const response = await app.get('/api/actors')
            expect(response.status).to.equal(200)
            expect(response.body.length).to.equal(5)
        })
    })
})