'use strict'

const WorkerCreator = require('./controllers/WorkerCreator.js')

class Database {
  static async createWorker (worker) {
    const workerCreator = new WorkerCreator()
    const response = await workerCreator.create(worker)

    return response
  }
}

module.exports = Database
