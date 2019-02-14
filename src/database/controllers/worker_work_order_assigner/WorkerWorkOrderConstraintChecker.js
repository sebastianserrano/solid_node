const DatabaseImplementation = require('@database/implementation/DatabaseImplementation.js')

class WorkerWorkOrderConstraintChecker {
  async validateCurrentNumberOfRowsWithWorkOrderTitle (workOrderTitle) {
    try {
      const currentNumberOfWorkersForWorkOrderId = await this.currentNumberOfRowsWithWorkOrderTitle(workOrderTitle)
      const numberOfWorkers = Number(currentNumberOfWorkersForWorkOrderId[0].count) + 1
      this.checkMaxWorkersPerWorkOrderConstraint(numberOfWorkers)
    } catch (error) {
      throw new Error('Max number of workers per work order constraint violated')
    }
  }

  checkMaxWorkersPerWorkOrderConstraint (numberOfWorkers) {
    if (numberOfWorkers < 5) {
      return 
    }

    throw new Error()
  }

  async currentNumberOfRowsWithWorkOrderTitle (workOrderTitle) {
    const query = 'SELECT COUNT(*) FROM workers_orders where (work_order_title = $1)'
    const response = await DatabaseImplementation.select(query, [workOrderTitle])

    return response
  }
}

module.exports = WorkerWorkOrderConstraintChecker
