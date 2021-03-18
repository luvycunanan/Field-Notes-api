const router = require('express').Router();
const controllers = require('../controllers');


router.post('/', controllers.auth.login);

module.exports = router;