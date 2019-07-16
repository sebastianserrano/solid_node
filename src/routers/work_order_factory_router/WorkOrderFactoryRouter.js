'use strict'

const WorkOrderFactory = require('@factories/work_order_factory/WorkOrderFactory.js')
const Database = require('@database/Database.js')
const TimeConverter = require('@utilities/time_converter/TimeConverter.js')

const express = require('express')
const router = express.Router()

router.post('/', async (request, response) => {
  const { title, description, deadline } = request.body

  const date = TimeConverter.convertEpochTimeInSecondsToDate(deadline)
  const isoDate = TimeConverter.convertDateToISOString(date)

  try {
    const workOrder = WorkOrderFactory.create(title, description, isoDate)
    await Database.createWorkOrder(workOrder)

    response.status(200).json({
      response: 'Work order succesfully created'
    })
  } catch (error) {
    response.status(400).json({
      response: 'Could not create work order at the moment, please try again'
    })
  }
})

module.exports = router
