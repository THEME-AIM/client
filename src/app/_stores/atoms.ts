import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { ResponsePeople } from '@customTypes/ResponseType';

const { persistAtom } = recoilPersist();
export const isDefaultSetup = atom<boolean>({
  key: 'isDefaultSetup',
  default: false,
  effects_UNSTABLE: [persistAtom]
});

export const searchList = atom<ResponsePeople[] | null>({
  key: 'searchList',
  default: null
});

interface SelectedProps {
  idx: number | null;
  info: ResponsePeople | null;
}
export const selectedPeople = atom<SelectedProps>({
  key: 'selectedPeople',
  default: {
    idx: null,
    info: null
  }
});

export const currentPath = atom<string>({
  key: 'currentPath',
  default: ''
});
