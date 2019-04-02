const express = require('express');
const router = express.Router();

// game route
router.get('/', (req, res) => {
	connection.query(
		'SELECT username, score FROM users ORDER BY score DESC LIMIT 10',
		[ req.body.email ],
		(error, results) => {
			if (error) throw error;
			res.render('pages/flappy', { data: results });
		}
	);
});

module.exports = router;
