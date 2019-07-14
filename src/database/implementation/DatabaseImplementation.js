const InsertController = require('./controllers/insert_controller/InsertController.js')

class DatabaseImplementation {
  static async insert (query, values) {
    const databaseInsert = new InsertController()

    const response = await databaseInsert.performInsert(query, values)
    return response
  }
}

module.exports = DatabaseImplementation
