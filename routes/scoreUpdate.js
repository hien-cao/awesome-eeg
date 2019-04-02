const express = require('express');
const router = express.Router();

/* update result */
router.post('/', (req, res) => {
	connection.query(
		'INSERT INTO users (username,score) VALUES (?,?)',
		[ req.body.name, req.body.score ],
		(error, results) => {
			if (error) throw error;
			res.redirect('/flappy');
		}
	);
});

module.exports = router;
