import { Illustration } from "@/interface/Illustration"
import { illustrationDatas } from "@/testdata/IllustrationData"
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import AspectRatio from '@mui/joy/AspectRatio';
import React, { useEffect, useState } from "react"
import { IMG_URL } from "@/constants/site";
import CafeFormStore from "@/store/cafeForm";
import Image from "next/image";

const IllustSelector: React.FC = () => {
  const illustDatas: Illustration[] = illustrationDatas;

  const cafeIconVal = CafeFormStore(state => state.currentCafe.icon);
  const replaceData = CafeFormStore(state => state.replaceData);

  const getIllustData: (val: string | null) => Illustration = (val) => {
    if (!val) {
      val = '00'
    }
    return illustDatas.filter(d => d.value === val)[0];
  }
  const [illustData, setIllustVal] = useState<Illustration>(getIllustData(cafeIconVal))

  const changeVal = (event: SelectChangeEvent) => {
    setIllustVal(getIllustData(event.target.value));
    replaceData('icon', event.target.value);
  }

  return (
    <>
      <FormControl>
        <InputLabel id="illust">イラストを選択</InputLabel>
        <Select
          labelId="illust"
          id="illust"
          value={illustData.value}
          label="イラストを選択"
          onChange={changeVal}
          sx={{ marginBottom: "5px" }}
        >
          {illustDatas.map(il => (
            <MenuItem value={il.value}>{il.showName}</MenuItem>
          ))}
        </Select>
        {illustData.value === '00' ? '' : (
          <AspectRatio ratio="1" variant="plain">
            <Image
              src={`/cat_img/${illustData.fileName}`}
              sizes="100vm"
              // width={100}
              // height={100}
              alt={illustData.showName}
              fill
            ></Image>
          </AspectRatio>
        )}
      </FormControl>
    </>
  )
}

export default IllustSelector;