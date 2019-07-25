const DatabaseImplementation = require('../implementation/DatabaseImplementation.js')

class WorkerDestroyer {
  async create (worker) {
    const query = 'DELETE FROM workers WHERE worker_name = $1'

    const response = await DatabaseImplementation.delete(query, [worker])
    return response
  }
}

module.exports = WorkerDestroyer
