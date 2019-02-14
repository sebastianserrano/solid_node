'use strict'

const Database = require('@database/Database.js')

const express = require('express')
const router = express.Router()

router.post('/:workerName/:workOrderTitle', async (request, response) => {
  const { workerName, workOrderTitle } = request.params

  try {
    await Database.assignWorkerToWorkOrderWithIds(workerName, workOrderTitle)

    response.status(200).json({
      response: 'Worker succesfully assigned to work order'
    })
  } catch (error) {
    response.status(400).json({
      response: 'Could not assign worker to work order at the moment, please try again'
    })
  }
})

module.exports = router
