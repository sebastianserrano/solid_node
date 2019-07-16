const expect = require('chai').expect
const WorkOrderFactory = require('./WorkOrderFactory.js')

describe('Work Order Factory', () => {
  it('should create a new work order with args upon request', () => {
    const title = 'mockedTitle'
    const description = 'mockedDescription'
    const deadline = new Date()

    const workOrder = WorkOrderFactory.create(title, description, deadline)
    expect(workOrder).to.be.a('object')
  })

  it('the workOrder\'s properties should match the input args', () => {
    const title = 'mockedTitle'
    const description = 'mockedDescription'
    const deadline = new Date().toISOString()

    const workOrder = WorkOrderFactory.create(title, description, deadline)
    expect(workOrder.title).to.equal(title)
    expect(workOrder.description).to.equal(description)
    expect(workOrder.deadline).to.equal(deadline)
  })
})
