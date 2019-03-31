const express = require('express');
const router = express.Router();

/* update result */
router.post('/', (req, res) => {
	res.redirect('/flappy');
});

module.exports = router;
