const {expect} = require('chai') // chai is the expectation library, mocha is the testing 
const {syncAndSeed} = require('../db')

// any call to the server is async
const app = require('supertest')(require('../app')) // what is supertest -- it tests express API // interrogates responses from express

describe('a test', ()=> {
    it('can be passed', () => {
    })
})

// describe('The Home Page', ()=> {
//     it('exists', async()=> {
//         const response = await app.get('/')
//         expect(response.status).to.equal(200)
//         expect(response.text).to.contain('The Acme')
//     })
// })

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
            expect(response.body.length).to.equal(4) // we get response.body from supertest
        })
        it('allows cross origin requests', async()=> {
            const response = await app.get('/api/movies')
            expect(response.headers['access-control-allow-origin']).to.be.ok
            expect(response.headers['access-control-allow-origin']).to.equal('*')
            //console.log(response.headers)
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