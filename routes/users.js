const router = require('express').Router();
const controllers = require('../controllers');

router.post('/', controllers.users.create)

module.exports = router;