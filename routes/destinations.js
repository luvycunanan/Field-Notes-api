const router = require('express').Router({ mergeParams: true });
const controllers = require('../controllers');

router.get('/', controllers.destinations.index);
router.get('/:id', controllers.destinations.show);
router.post('/', controllers.destinations.create);
router.put('/:id', controllers.destinations.update);
router.delete('/:id', controllers.destinations.destroy);

module.exports = router;

