const ItemController = require('../controllers/items.controller')

const routes =  (app) => {

    //Testing
    app.get ('/api/v1/', ItemController.test)

    //Create 
    app.post ('/api/v1/items/create', ItemController.create)

    //Read
    app.get ('/api/v1/items', ItemController.getAll)
    app.get ('/api/v1/items/:id', ItemController.getOne)

    //Update
    app.put ('/api/v1/items/:id', ItemController.updateOne)
    app.put ('/api/v1/items/:id/sell', ItemController.updateOne)

    //DELETE 
    app.delete ('/api/v1/items/:id', ItemController.delete)
    

}

module.exports = routes