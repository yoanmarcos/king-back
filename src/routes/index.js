const router = require('express').Router();

const test = require('./test');
const ressource = require('./ressource');
const habitant = require('./habitant');
const pays = require('./pays');

router.use('/test', test);
router.use('/ressource', ressource);
router.use('/habitant', habitant);
router.use('/pays', pays);
module.exports = router;
