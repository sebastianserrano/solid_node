const DatabaseImplementation = require('../implementation/DatabaseImplementation.js')

class WorkOrdersRetriever {
  async fetchWorkOrdersFromWorkerWithName (workerName, sorting) {
    let query

    switch (sorting) {
      case 'asc':
        query = this.constructQueryByAscendingOrder()
        break;

      case 'desc':
        query = this.constructQueryByDescendingOrder()
        break;
        
      default:
        query = this.constructQueryByAscendingOrder()
    }

    const response = await DatabaseImplementation.select(query, [workerName])
    return response
  }

  constructQueryByAscendingOrder () {
    const query = 'SELECT * FROM work_orders \
                   INNER JOIN workers_orders \
                   ON work_orders.work_order_title = workers_orders.work_order_title \
                   WHERE workers_orders.worker_name = $1 \
                   ORDER BY work_orders.work_order_deadline ASC'

    return query
  }

  constructQueryByDescendingOrder () {
    const query = 'SELECT * FROM work_orders \
                   INNER JOIN workers_orders \
                   ON work_orders.work_order_title = workers_orders.work_order_title \
                   WHERE workers_orders.worker_name = $1 \
                   ORDER BY work_orders.work_order_deadline DESC'

    return query
  }
}

module.exports = WorkOrdersRetriever
