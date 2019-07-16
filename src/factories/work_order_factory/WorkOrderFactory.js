'use strict'

const WorkOrder = require('@models/WorkOrder.js')

const WorkOrderFactory = {
  create (title, description, deadline) {
    const workOrder = Object.create(WorkOrder)

    workOrder.title = title
    workOrder.description = description
    workOrder.deadline = deadline

    return workOrder
  }
}

module.exports = WorkOrderFactory
