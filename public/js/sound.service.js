export class SoundService {
	constructor() {
		this.fly = new Audio();
		this.scor = new Audio();

		this.fly.src = 'sounds/fly.mp3';
		this.scor.src = 'sounds/score.mp3';
	}

	getSound() {
		return [ this.fly, this.scor ];
	}
}
