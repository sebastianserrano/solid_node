const expect = require('chai').expect
const WorkerFactory = require('./WorkerFactory.js')

describe('Worker Factory', () => {
  it('should create a new worker with args upon request', () => {
    const name = 'mockedName'
    const companyName = 'mockedCompanyName'
    const email = 'mockedEmail'

    const worker = WorkerFactory.create(name, companyName, email)
    expect(worker).to.be.a('object')
  })

  it('the worker\'s properties should match the input args', () => {
    const name = 'mockedName'
    const companyName = 'mockedCompanyName'
    const email = 'mockedEmail'

    const worker = WorkerFactory.create(name, companyName, email)
    expect(worker.name).to.equal(name)
    expect(worker.companyName).to.equal(companyName)
    expect(worker.email).to.equal(email)
  })
})
