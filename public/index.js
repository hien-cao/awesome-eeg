import { ImageService } from './js/image.service';
import { SoundService } from './js/sound.service';
import { ComponentService } from './js/component.service';
import { run } from './js/app';
import './css/main.css';

if (window.location.pathname == '/flappy') {
	const componentService = new ComponentService();
	const imageService = new ImageService();
	const soundService = new SoundService();
	run(componentService, imageService, soundService);
}
