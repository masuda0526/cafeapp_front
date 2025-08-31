import CafeFormStore from "@/store/cafeForm";
import { useState } from "react";
import RadiusCheckBoxVisual from "./RadiusCheckBoxVisual";

interface Props{
  val:number,
  day:string
}
const RadiusCheckBox: React.FC<Props> = (props) => {
  // 必要なデータを読み込み
  const openDay = CafeFormStore(state => state.currentCafe.openDay);
  const replaceData = CafeFormStore(state => state.replaceData);
  const initialBool = openDay.openDays.includes(props.val);
  console.log(`day:${props.day} val:${props.val} isInclude:${initialBool}`)
  // 初期設定
  const [isSelect, setSelectFlg] = useState<boolean>(initialBool);
  // 置換処理
  const replaceDay = () => {
    let days : number[] = openDay.openDays;
    if(days.includes(props.val)){
      days = days.filter(day => {day != props.val});
    }else{
      days.push(props.val);
    }
    replaceData('openDay', {...openDay, openDays:days});
  }
  // クリックイベント
  const handleClick = () => {
    replaceDay();
    setSelectFlg(!isSelect)
    console.log(openDay);
  }
  return (
    <RadiusCheckBoxVisual parentFlg={initialBool} viewVal={props.day} parentFunc={() => handleClick()}/>
  )
}

export default RadiusCheckBox;