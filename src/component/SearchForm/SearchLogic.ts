import { CafeProps } from "@/interface/CafeProps";
import SearchParam from "@/interface/SearchParam";
import { hasComenntStat } from "./ParamStat";

export const targetCafeFilter = (cafes : CafeProps[], param:SearchParam):CafeProps[] => {
  return cafes.filter(cafe => isTarget(cafe, param));
}

const isTarget = (cafe : CafeProps, param:SearchParam):boolean => {
  if(!isTargetText(cafe, param)){return false}
  if(!isTargetCity(cafe, param)){return false}
  if(!isTargetHasComment(cafe, param)){return false}
  if(!isTargetGone(cafe, param)){return false}
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