const DatabaseImplementation = require('@database/implementation/DatabaseImplementation.js')

class WorkerWorkOrderConstraintChecker {
  async validateCurrentNumberOfRowsWithWorkOrderTitle (workOrderTitle) {
    const currentNumberOfWorkersForWorkOrderId = await this.currentNumberOfRowsWithWorkOrderTitle(workOrderTitle)
    const numberOfWorkers = Number(currentNumberOfWorkersForWorkOrderId[0].count)
    this.checkMaxWorkersPerWorkOrderConstraint(numberOfWorkers)

    return
  }

  checkMaxWorkersPerWorkOrderConstraint (numberOfWorkers) {
    if (numberOfWorkers < 5) {
      return 
    }

    throw new Error('Max number of workers per work order constraint violated')
  }

  async currentNumberOfRowsWithWorkOrderTitle (workOrderTitle) {
    const query = 'SELECT COUNT(*) FROM workers_orders WHERE (work_order_title = $1)'
    const response = await DatabaseImplementation.select(query, [workOrderTitle])

    return response
  }
}

module.exports = WorkerWorkOrderConstraintChecker
