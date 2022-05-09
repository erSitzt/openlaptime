module.exports = app => {
    const lapController = require('../controllers/lap.controller')

    app.route('/lap')
        .get(lapController.read)

    app.route('/lap/:id')
        .post(lapController.create)
        .put(lapController.update)
        .delete(lapController.delete)
        .get(lapController.readById)
}