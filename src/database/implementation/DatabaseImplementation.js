const InsertController = require('./controllers/insert_controller/InsertController.js')
const SelectController = require('./controllers/select_controller/SelectController.js')

class DatabaseImplementation {
  static async insert (query, values) {
    const databaseInsert = new InsertController()

    const response = await databaseInsert.performInsert(query, values)
    return response
  }

  static async select (query, values) {
    const databaseSelect = new SelectController()

    const response = await databaseSelect.performSelect(query, values)
    return response
  }
}

module.exports = DatabaseImplementation
