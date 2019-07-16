'use strict'

const WorkerCreator = require('./controllers/WorkerCreator.js')
const WorkOrderCreator = require('./controllers/WorkOrderCreator.js')

class Database {
  static async createWorker (worker) {
    const workerCreator = new WorkerCreator()
    const response = await workerCreator.create(worker)

    return response
  }

  static async createWorkOrder (workOrder) {
    const workOrderCreator = new WorkOrderCreator()
    const response = await workOrderCreator.create(workOrder)

    return response
  }
}

module.exports = Database
