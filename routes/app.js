let router = require('express').Router();

let PagesController = require('../controllers/PagesController');


router.get('/', PagesController.homepage);

router.get('/addNew', PagesController.addNew);

router.get('/:id', PagesController.specificProduct);

router.get('/:id/edit', PagesController.editProduct);

router.put('/:id', PagesController.updateProduct);

router.delete('/:id', PagesController.deleteProduct);

router.post('/', PagesController.insertProduct);


module.exports = router;