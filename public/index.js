import { ImageService } from './static/js/image.service';
import { SoundService } from './static/js/sound.service';
import { ComponentService } from './static/js/component.service';
import { run } from './static/js/app';

const componentService = new ComponentService();
const imageService = new ImageService();
const soundService = new SoundService();
run(componentService, imageService, soundService);
