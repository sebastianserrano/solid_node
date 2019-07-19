'use strict'

const Database = require('@database/Database.js')

const express = require('express')
const router = express.Router()

router.get('/:workerName/:sorting?', async (request, response) => {
  const { workerName, sorting } = request.params

  try {
    const workOrders = await Database.fetchWorkOrdersFromWorkerWithName(workerName, sorting)

    response.status(200).json({
      response: workOrders
    })
  } catch (error) {
    response.status(400).json({
      response: 'Could not fetch the worker\'s orders at the moment, please try again'
    })
  }
})

module.exports = router
