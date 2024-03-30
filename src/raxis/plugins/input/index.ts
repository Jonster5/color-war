import { Raxis } from '../..';
import { setupEvents, KeydownEvent, KeyupEvent, PointerDownEvent, PointerUpEvent } from './events';
import { Input, KeyIdentifier } from './input';
import { KeyboardState } from './keyboard';
import { PointerState } from './pointer';

export const InputPlugin = new Raxis.Builder()
	.useEvent(KeydownEvent)
	.useEvent(KeyupEvent)
	.useEvent(PointerDownEvent)
	.useEvent(PointerUpEvent)
	.useGlobal(Input)
	.useStartup(setupEvents);

export { Input, KeydownEvent, KeyupEvent, KeyboardState, PointerState, type KeyIdentifier };
