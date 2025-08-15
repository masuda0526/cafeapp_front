import {create} from "zustand";
import { CafeProps } from "@/interface/CafeProps";

interface DataStore {
  cafes: CafeProps[],
  replaceCafes: (datas:CafeProps[]) => void,
}

const useDataStore = create<DataStore>((set, get) => ({
  cafes:[],
  replaceCafes:(datas) => set({cafes:datas}),
}))

export default useDataStore;