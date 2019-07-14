'use strict'

const Worker = require('../models/Worker.js')

const WorkerFactory = {
  create (name, companyName, email) {
    const worker = Object.create(Worker)

    worker.name = name
    worker.companyName = companyName
    worker.email = email

    return worker
  }
}

module.exports = WorkerFactory
