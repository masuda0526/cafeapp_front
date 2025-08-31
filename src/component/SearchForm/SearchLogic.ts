import { CafeProps } from "@/interface/CafeProps";
import SearchParam from "@/interface/SearchParam";
import { hasComenntStat } from "./ParamStat";
import CafeOpenDay from "../CafeInfo/CafeOpenDay";

export const targetCafeFilter = (cafes : CafeProps[], param:SearchParam):CafeProps[] => {
  return cafes.filter(cafe => isTarget(cafe, param));
}

const isTarget = (cafe : CafeProps, param:SearchParam):boolean => {
  if(!isTargetText(cafe, param)){return false}
  if(!isTargetCity(cafe, param)){return false}
  if(!isTargetHasComment(cafe, param)){return false}
  if(!isTargetGone(cafe, param)){return false}
  if(!isTargetDay(cafe, param)){return false}
  return true;
}

const isTargetText = (cafe:CafeProps, param:SearchParam):boolean => {
  if(param.tgText === ''){
    return true;
  }
  return cafe.cafeName.includes(param.tgText);
}

const isTargetCity = (cafe:CafeProps, param:SearchParam):boolean => {
  if(param.tgCities.length === 0){
    return true;
  }
  return param.tgCities.includes(cafe.cafeCity);
}

const isTargetHasComment = (cafe:CafeProps, param:SearchParam):boolean => {
 if(param.tgHasComment === '00'){
  return true
 }

 const isHasComment = cafe.comment !== '' && cafe.comment !== null;
 if(param.tgHasComment === '01'){
  return isHasComment;
 }else if(param.tgHasComment === '02'){
  return !isHasComment;
 }
 return true;

}

const isTargetGone = (cafe:CafeProps, param:SearchParam):boolean => {
 if(param.tgGoneState === '00'){
  return true
 }

 const isGone = cafe.isGone
 if(param.tgGoneState === '01'){
  return isGone;
 }else if(param.tgGoneState === '02'){
  return !isGone;
 }
 return true;

}

const isTargetDay = (cafe:CafeProps, param:SearchParam):boolean => {
  // 選択されていなければ、全て表示
  if(param.tgOpenDays.length === 0){
    return true
  }

  const cafeCloseDays = cafe.openDay.openDays;
  if(cafeCloseDays.length === 0){
    return true
  }

  const tgDays = param.tgOpenDays;
  if(param.tgAndSearch){
    // 選択された曜日全て営業しているか
    for(let n of tgDays){
      if(cafe.openDay.openDays.includes(n)){
        return false;
      }
    }
  }else{
    // 選択された曜日のどれか１つが営業している
    for(let n of tgDays){
      if(!cafeCloseDays.includes(n)){
        return true;
      }
    }
  }
  return false;
}