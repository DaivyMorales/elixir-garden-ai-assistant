import { create } from "zustand";

export interface ResponseValues {
  value: string;
  description: string;
  porcentaje: number;
  id: string
}

export interface GlobalDataProps {
  response: ResponseValues[];
  setResponse: (values: ResponseValues[]) => void;
}

export const useGlobalData = create<GlobalDataProps>((set) => ({
  response: [],
  setResponse: (values: ResponseValues[]) => {
    set(() => ({ response: values }));
  },
}));
