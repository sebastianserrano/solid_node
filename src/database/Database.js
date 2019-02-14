'use strict'

const WorkerCreator = require('./controllers/WorkerCreator.js')
const WorkOrderCreator = require('./controllers/WorkOrderCreator.js')
const WorkerToWorkOrderAssigner = require('./controllers/worker_work_order_assigner/WorkerToWorkOrderAssigner.js')

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

  static async assignWorkerToWorkOrderWithIds (workerName, workOrderTitle) {
    const workerToWorkOrderAssigner = new WorkerToWorkOrderAssigner()
    const response = await workerToWorkOrderAssigner.assignWithIds(workerName, workOrderTitle)

    return response
  }
}

module.exports = Database
