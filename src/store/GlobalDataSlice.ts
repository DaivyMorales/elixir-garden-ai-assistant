import { create } from "zustand";

export interface GlobalDataProps {
  response: [];
  setResponse: (values: []) => void;
}

export const useGlobalData = create<GlobalDataProps>((set) => ({
  response: [],
  setResponse: (values: []) => {
    set(() => ({ response: values }));
  },
}));
