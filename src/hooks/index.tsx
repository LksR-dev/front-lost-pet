import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const userDataState = atom({
	key: 'userData',
	default: {},
	effects_UNSTABLE: [persistAtom],
});
export const useUserData = () => {
	return useRecoilState(userDataState);
};

export const burguerButtonState = atom({
	key: 'buttonState',
	default: false,
});
export const useBurguerButton = () => {
	return useRecoilState(burguerButtonState);
};

export const goToState = atom({
	key: 'goTo',
	default: '',
});
export const useGoTo = () => {
	return useRecoilState(goToState);
};
