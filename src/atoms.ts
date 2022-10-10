import { atom, selector } from 'recoil';

export const queryState = atom({
	key: 'queryState',
	default: '',
});

export const searchProductState = selector({
	key: 'searchProductState', // unique ID (with respect to other atoms/selectors)
	get: async ({ get }) => {
		const query = get(queryState);
		const res = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + query);
		const data = await res.json();
		return data.results;
	},
});

export const itemIdState = atom({
	key: 'itemIdState',
	default: '',
});

export const itemId = selector({
	key: 'itemId',
	get: async ({ get }) => {
		const id = get(itemIdState);
		const res = await fetch('https://api.mercadolibre.com/items/' + id);
		const data = await res.json();
		return data;
	},
});
