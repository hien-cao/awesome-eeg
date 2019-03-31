const express = require('express');
const router = express.Router();

// game route
router.get('/', (req, res) => {
	data = [ { name: 'Hien', scores: 5 }, { name: 'Vilis', scores: 10 }, { name: 'Niko', scores: 8 } ];
	res.render('pages/flappy', { data: data });
});

module.exports = router;
