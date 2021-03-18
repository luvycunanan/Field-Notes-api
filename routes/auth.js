const router = require('express').Router();
const controllers = require('../controllers');


router.post('/login', controllers.auth.login);
router.post('/verify', controllers.auth.verify);

module.exports = router;