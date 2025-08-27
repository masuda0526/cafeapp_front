import { create } from "zustand";
import SearchParam from "@/interface/SearchParam";

const DefaultSearchParam : SearchParam = {
  tgCities:[],
  tgGoneState:'00',
  tgHasComment:'00',
  tgText:''
}

interface SearchStoreInterface {
  currentSearchParam : SearchParam,
  setParam : <K extends keyof SearchParam>(key:K, val:SearchParam[K]) => void,
  resetParam:() => void 
}

const SearchParamStore = create<SearchStoreInterface>((set, get) => ({
  currentSearchParam : DefaultSearchParam,
  setParam:(key, val) => set((state) => {
    const oldParam = state.currentSearchParam;
    const newParam = {
      ...oldParam,
      [key]:val
    }
    return {currentSearchParam:newParam}
  }),
  resetParam:() => {set({currentSearchParam:DefaultSearchParam})}
}))

export default SearchParamStore;