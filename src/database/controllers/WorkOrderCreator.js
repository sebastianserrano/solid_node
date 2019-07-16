const DatabaseImplementation = require('../implementation/DatabaseImplementation.js')

class WorkOrderCreator {
  async create (workOrder) {
    const { title, description, deadline } = workOrder
    const query = 'INSERT INTO work_orders(work_order_title, work_order_description, work_order_deadline) VALUES ($1, $2, $3)'

    const response = await DatabaseImplementation.insert(query, [title, description, deadline])
    return response
  }
}

module.exports = WorkOrderCreator
