export class ComponentService {
	constructor() {
		this.canvas = document.getElementById('canvas');
		this.context = canvas.getContext('2d');
		this.modal = $('#gameModal');
		this.playAgainBtn = document.getElementById('playAgain');
		this.scoreElement = document.getElementById('score');
		this.labelElement = document.getElementById('label');
	}

	getComponent() {
		return [ this.canvas, this.context, this.modal, this.playAgainBtn, this.scoreElement, this.labelElement ];
	}
}
