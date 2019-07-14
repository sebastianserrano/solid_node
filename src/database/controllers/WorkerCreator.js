const DatabaseImplementation = require('../implementation/DatabaseImplementation.js')

class WorkerCreator {
  async create (worker) {
    const { name, companyName, email } = worker
    const query = 'INSERT INTO workers(worker_name, worker_company_name, worker_email) VALUES ($1, $2, $3)'

    const response = await DatabaseImplementation.insert(query, [name, companyName, email])
    return response
  }
}

module.exports = WorkerCreator
