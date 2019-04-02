const express = require('express');
const router = express.Router();

// home route
router.get('/', (req, res) => {
	res.render('pages/index', { results: results });
	/* 	connection.query(
		'SELECT username, score FROM users ORDER BY score DESC LIMIT 10',
		[ req.body.email ],
		(error, results) => {
			if (error) throw error;
			console.log(results);
			res.render('pages/index', { results: results });
		}
	); */
});

module.exports = router;
