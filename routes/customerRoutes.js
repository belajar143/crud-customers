const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/', customerController.getAllCustomers);
router.get('/add', customerController.showAddForm);
router.post('/add', customerController.addCustomer);
router.get('/edit/:id', customerController.showEditForm);
router.post('/edit/:id', customerController.updateCustomer);
router.get('/delete/:id', customerController.deleteCustomer);
router.get('/', customerController.getAllCustomers);
router.post('/search', customerController.searchCustomers);

module.exports = router;
