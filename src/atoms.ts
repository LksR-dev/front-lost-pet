import { atom, selector } from 'recoil';

export const burguerButtonState = atom({
	key: 'buttonState',
	default: false,
});
