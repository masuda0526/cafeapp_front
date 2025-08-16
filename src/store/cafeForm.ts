import { CafeProps } from "@/interface/CafeProps";
import { create } from "zustand";
import useDataStore from "./data";
import { TravelTimeProps } from "@/interface/TravelTimeProps";

interface CafeForm {
  currentCafe:CafeProps,
  setTargetCafe:(_id:string|null)=>void,
  replaceData:<K extends keyof CafeProps>(key:K, value:CafeProps[K])=>void,
  resetData:()=>void
}

const defaultCafe: CafeProps = {
  _id: null,
  isGone: false,
  cafeName: '',
  cafeCity: '',
  foodMenu: [''],
  time: '',
  atmo: '',
  goodPoints: [''],
  badPoints: [''],
  comment: null,
  icon: null,
  travelTime: {
    way:'walk',
    minute:0
  }
};

const CafeFormStore = create<CafeForm>((set, get) => ({
  currentCafe:defaultCafe,
  setTargetCafe:(cafeId) => set(() => {
    const cafes = useDataStore.getState().cafes;
    const target:CafeProps = cafes.filter(cafe => cafe._id === cafeId)[0];
    return {currentCafe:target}
  }),
  replaceData:(key, val) => set((state) => {
    const oldCafe:CafeProps = state.currentCafe;
    const newCafe:CafeProps = {
      ...oldCafe,
      [key]:val
    }
    return {currentCafe:newCafe}
  }),
  resetData:()=>{set({currentCafe:defaultCafe})}
}))

export default CafeFormStore;

