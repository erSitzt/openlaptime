module.exports = app => {
    const tagController = require('../controllers/tag.controller')

    app.route('/tags')
        .get(tagController.read)

    app.route('/tag/:id')
        .post(tagController.create)
        .put(tagController.update)
        .delete(tagController.delete)
        .get(tagController.readById)
}