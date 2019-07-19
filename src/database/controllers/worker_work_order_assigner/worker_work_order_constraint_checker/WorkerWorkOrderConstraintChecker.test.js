const sandbox = require('sinon').createSandbox()
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
const WorkerWorkOrderConstraintChecker = require('./WorkerWorkOrderConstraintChecker.js')

let mockedCurrentNumberOfRowsWithWorkOrderTitle

describe('Worker to work order constraint checker', () => {
  before('Stub currentNumberOfRowsWithWorkOrderTitle function', () => {
    mockedCurrentNumberOfRowsWithWorkOrderTitle = sandbox.stub(WorkerWorkOrderConstraintChecker.prototype, 'currentNumberOfRowsWithWorkOrderTitle')
  })

  it('should validate constraint when number of workers is less than 5 per work order', async () => {
    mockedCurrentNumberOfRowsWithWorkOrderTitle.resolves([{count: 2}])

    const mockedWorkOrderTitle = 'MockedWorkOrderTitle'

    const workerWorkOrderConstraintChecker = new WorkerWorkOrderConstraintChecker()
    expect(workerWorkOrderConstraintChecker.validateCurrentNumberOfRowsWithWorkOrderTitle(mockedWorkOrderTitle)).to.be.fulfilled
  })

  it('should not validate constraint when number of workers is more than or equal to 5 per work order', async () => {
    mockedCurrentNumberOfRowsWithWorkOrderTitle.resolves([{count: 5}])

    const mockedWorkOrderTitle = 'MockedWorkOrderTitle'

    const workerWorkOrderConstraintChecker = new WorkerWorkOrderConstraintChecker()
    expect(workerWorkOrderConstraintChecker.validateCurrentNumberOfRowsWithWorkOrderTitle(mockedWorkOrderTitle)).to.be.rejected
  })

  after('Restore WorkerWorkOrderConstraintChecker', () => {
    sandbox.restore()
  })
})
