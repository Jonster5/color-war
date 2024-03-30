import { Raxis, wrap, Option } from '../..';

export class KeydownEvent {
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/altKey) */
	readonly altKey: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/code) */
	readonly code: string;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/ctrlKey) */
	readonly ctrlKey: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/isComposing) */
	readonly isComposing: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/key) */
	readonly key: string;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/location) */
	readonly location: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/metaKey) */
	readonly metaKey: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/repeat) */
	readonly repeat: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/shiftKey) */
	readonly shiftKey: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/getModifierState) */
	readonly getModifierState: (keyArg: string) => boolean;

	readonly DOM_KEY_LOCATION_STANDARD = 0x00 as const;
	readonly DOM_KEY_LOCATION_LEFT = 0x01 as const;
	readonly DOM_KEY_LOCATION_RIGHT = 0x02 as const;
	readonly DOM_KEY_LOCATION_NUMPAD = 0x03 as const;
	constructor(e: KeyboardEvent) {
		this.altKey = e.altKey;
		this.code = e.code;
		this.ctrlKey = e.ctrlKey;
		this.isComposing = e.isComposing;
		this.key = e.key;
		this.location = e.location;
		this.metaKey = e.metaKey;
		this.repeat = e.repeat;
		this.shiftKey = e.shiftKey;
		this.getModifierState = e.getModifierState.bind(e);
	}
}

export class KeyupEvent {
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/altKey) */
	readonly altKey: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/code) */
	readonly code: string;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/ctrlKey) */
	readonly ctrlKey: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/isComposing) */
	readonly isComposing: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/key) */
	readonly key: string;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/location) */
	readonly location: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/metaKey) */
	readonly metaKey: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/repeat) */
	readonly repeat: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/shiftKey) */
	readonly shiftKey: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/getModifierState) */
	readonly getModifierState: (keyArg: string) => boolean;

	readonly DOM_KEY_LOCATION_STANDARD = 0x00 as const;
	readonly DOM_KEY_LOCATION_LEFT = 0x01 as const;
	readonly DOM_KEY_LOCATION_RIGHT = 0x02 as const;
	readonly DOM_KEY_LOCATION_NUMPAD = 0x03 as const;
	constructor(e: KeyboardEvent) {
		this.altKey = e.altKey;
		this.code = e.code;
		this.ctrlKey = e.ctrlKey;
		this.isComposing = e.isComposing;
		this.key = e.key;
		this.location = e.location;
		this.metaKey = e.metaKey;
		this.repeat = e.repeat;
		this.shiftKey = e.shiftKey;
		this.getModifierState = e.getModifierState.bind(e);
	}
}

export class PointerDownEvent {
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/altKey) */
	readonly altKey: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/button) */
	readonly button: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/buttons) */
	readonly buttons: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/clientX) */
	readonly clientX: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/clientY) */
	readonly clientY: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/ctrlKey) */
	readonly ctrlKey: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/metaKey) */
	readonly metaKey: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/movementX) */
	readonly movementX: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/movementY) */
	readonly movementY: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/offsetX) */
	readonly offsetX: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/offsetY) */
	readonly offsetY: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/pageX) */
	readonly pageX: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/pageY) */
	readonly pageY: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/relatedTarget) */
	readonly relatedTarget: Option<EventTarget>;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/screenX) */
	readonly screenX: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/screenY) */
	readonly screenY: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/shiftKey) */
	readonly shiftKey: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/x) */
	readonly x: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/y) */
	readonly y: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/getModifierState) */
	readonly getModifierState: (keyArg: string) => boolean;

	constructor(e: PointerEvent) {
		this.altKey = e.altKey;
		this.button = e.button;
		this.buttons = e.buttons;
		this.clientX = e.clientX;
		this.clientY = e.clientY;
		this.ctrlKey = e.ctrlKey;
		this.metaKey = e.metaKey;
		this.movementX = e.movementX;
		this.movementY = e.movementY;
		this.offsetX = e.offsetX;
		this.offsetY = e.offsetY;
		this.pageX = e.pageX;
		this.pageY = e.pageY;
		this.relatedTarget = wrap(e.relatedTarget);
		this.screenX = e.screenX;
		this.screenY = e.screenY;
		this.shiftKey = e.shiftKey;
		this.x = e.x;
		this.y = e.y;
		this.getModifierState = e.getModifierState.bind(e);
	}
}

export class PointerUpEvent {
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/altKey) */
	readonly altKey: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/button) */
	readonly button: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/buttons) */
	readonly buttons: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/clientX) */
	readonly clientX: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/clientY) */
	readonly clientY: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/ctrlKey) */
	readonly ctrlKey: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/metaKey) */
	readonly metaKey: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/movementX) */
	readonly movementX: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/movementY) */
	readonly movementY: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/offsetX) */
	readonly offsetX: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/offsetY) */
	readonly offsetY: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/pageX) */
	readonly pageX: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/pageY) */
	readonly pageY: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/relatedTarget) */
	readonly relatedTarget: Option<EventTarget>;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/screenX) */
	readonly screenX: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/screenY) */
	readonly screenY: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/shiftKey) */
	readonly shiftKey: boolean;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/x) */
	readonly x: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/y) */
	readonly y: number;
	/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent/getModifierState) */
	readonly getModifierState: (keyArg: string) => boolean;

	constructor(e: PointerEvent) {
		this.altKey = e.altKey;
		this.button = e.button;
		this.buttons = e.buttons;
		this.clientX = e.clientX;
		this.clientY = e.clientY;
		this.ctrlKey = e.ctrlKey;
		this.metaKey = e.metaKey;
		this.movementX = e.movementX;
		this.movementY = e.movementY;
		this.offsetX = e.offsetX;
		this.offsetY = e.offsetY;
		this.pageX = e.pageX;
		this.pageY = e.pageY;
		this.relatedTarget = wrap(e.relatedTarget);
		this.screenX = e.screenX;
		this.screenY = e.screenY;
		this.shiftKey = e.shiftKey;
		this.x = e.x;
		this.y = e.y;
		this.getModifierState = e.getModifierState.bind(e);
	}
}

export function setupEvents(r: Raxis) {
	window.addEventListener('keydown', (e) => {
		if (!e.repeat) r.dispatch(new KeydownEvent(e));
	});
	window.addEventListener('keyup', (e) => {
		r.dispatch(new KeyupEvent(e));
	});
	window.addEventListener('pointerdown', (e) => {
		r.dispatch(new PointerDownEvent(e));
	});
	window.addEventListener('pointerup', (e) => {
		r.dispatch(new PointerUpEvent(e));
	});
}
