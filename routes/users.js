const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../middleware/auth');

router.post('/', controllers.users.create)
router.get('/profile', auth, controllers.users.profile)

module.exports = router;