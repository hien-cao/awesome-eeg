export const run = (componentService, imageService, soundService) => {
	// load components
	const [ canvas, context, modal, playAgainBtn, scoreElement, labelElement ] = componentService.getComponent();

	// load images
	const [ bird, bg, fg, pipeNorth, pipeSouth ] = imageService.getImage();

	// load audio
	const [ fly, scor ] = soundService.getSound();

	// some varaibles
	const gap = 85;
	let constant;
	// pipe coordinates
	let pipes = [];

	let bX = 50; // initial position of the bird
	let bY = 150; // initial position of the bird

	const gravity = 1.5;
	const velocity = 25;
	let score = 0;
	let paused = false;
	let gameOver = false;
	let newGame = true;
	let newGameCheck = true; // use to check if the game has started
	// press the key board
	document.addEventListener('keydown', (e) => {
		if (e.keyCode == 65 || e.keyCode == 32 || e.keyCode == 38) {
			if (!paused) {
				bY -= velocity;
				fly.play();
			}
		} else if (e.keyCode == 80) {
			paused = !paused;
			if (!paused) draw();
		} else if (e.keyCode == 13) {
			newGame = false;
			if (!newGame && newGameCheck) {
				newGameCheck = false;
				draw();
			}
		}
	});
	// play again
	playAgainBtn.addEventListener('click', () => {
		gameOver = false;
		playAgain();
	});

	function showModal() {
		modal.modal('show');
		scoreElement.value = score;
		if (score < 2) {
			labelElement.innerText = `Your score is ${score}\nDo you want to save the score?`;
		} else {
			labelElement.innerText = `Your scores are ${score}\nDo you want to save the scores?`;
		}
	}

	function playAgain() {
		score = 0;
		bX = 50;
		bY = 150;
		pipes = [];
		pipes[0] = {
			x: canvas.width - 500,
			y: 0
		};
		pipes[1] = {
			x: canvas.width - 250,
			y: -100
		};
		draw();
	}
	// random position of pipe
	function getRandomPipeY() {
		const value = Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height;
		return value >= -190 ? value : -190;
	}
	// draw images
	function draw() {
		context.fillStyle = '#333';
		context.font = '20px Verdana';

		if (newGame) {
			context.fillText('Press enter to play game', canvas.width / 2 - 120, canvas.height / 2);
			return;
		}
		if (paused) {
			context.fillText('Paused', canvas.width / 2 - 30, canvas.height / 2);
			return;
		}
		if (gameOver) {
			context.fillText('Game Over', canvas.width / 2 - 40, canvas.height / 2);
			return;
		}
		// add the background
		context.drawImage(bg, 0, 0);
		// add pipes
		if (pipes.length == 0) {
			pipes[0] = {
				x: canvas.width - 500,
				y: 0
			};

			pipes[1] = {
				x: canvas.width - 250,
				y: -100
			};
		}
		for (let i = 0; i < pipes.length; i++) {
			constant = pipeNorth.height + gap;
			context.drawImage(pipeNorth, pipes[i].x, pipes[i].y);
			context.drawImage(pipeSouth, pipes[i].x, pipes[i].y + constant);
			pipes[i].x--;
			if (pipes[i].x == 549) {
				pipes.push({
					x: canvas.width,
					y: getRandomPipeY()
				});
			}
			// collision
			if (
				(bX + bird.width >= pipes[i].x &&
					bX <= pipes[i].x + pipeNorth.width &&
					(bY <= pipes[i].y + pipeNorth.height || bY + bird.height >= pipes[i].y + constant)) ||
				bY + bird.height >= canvas.height - fg.height
			) {
				gameOver = true;
				showModal();
			}
			// score
			if (pipes[i].x == 8 && bX <= canvas.height - fg.height) {
				score++;
				scor.play();
			}
		}
		// add ground
		context.drawImage(fg, 0, canvas.height - fg.height);
		// add the bird
		context.drawImage(bird, bX, bY);

		// bird affected by gravity
		bY += gravity;

		// print the score to canvas
		if (score < 2) {
			context.fillText('Score: ' + score, 10, canvas.height - 20);
		} else {
			context.fillText('Scores: ' + score, 10, canvas.height - 20);
		}

		// print paused
		context.fillText('Press p to pause', canvas.width - 180, canvas.height - 20);

		requestAnimationFrame(draw);
	}

	draw();
};
