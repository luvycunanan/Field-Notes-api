const router = require('express').Router({ mergeParams: true });
const controllers = require('../controllers');

router.get('/', controllers.spots.index);
router.get('/:id', controllers.spots.show);
router.post('/', controllers.spots.create);
router.put('/:id', controllers.spots.update);
router.delete('/:id', controllers.spots.destroy);

module.exports = router;

