const DatabaseImplementation = require('@database/implementation/DatabaseImplementation.js')
const WorkerWorkOrderConstraintChecker = require('./WorkerWorkOrderConstraintChecker.js')

class WorkerToWorkOrderAssigner {
  constructor () {
    this.workerWorkOrderConstraintChecker = new WorkerWorkOrderConstraintChecker()
  }

  async assignWithIds (workerName, workOrderTitle) {
    const query = 'INSERT INTO workers_orders(worker_name, work_order_title) \
                   VALUES ($1, $2)'
    try {
      await this.workerWorkOrderConstraintChecker.validateCurrentNumberOfRowsWithWorkOrderTitle(workOrderTitle)
      const response = await DatabaseImplementation.insert(query, [workerName, workOrderTitle])

      return response
    } catch (error) {
      throw error
    }
  }

}

module.exports = WorkerToWorkOrderAssigner
