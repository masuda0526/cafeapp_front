import { IMG_URL } from "@/constants/site";
import { Illustration } from "@/interface/Illustration";
import { illustrationDatas } from "@/testdata/IllustrationData"

const imgs:Illustration[] = illustrationDatas;
export const getIllustData = (iconVal:string|null):Illustration|undefined => {
  const val = iconVal || '00'
  return imgs.find(img => img.value === iconVal);
}

export const getIllustUrl:(iconVal:string|null) => string = (iconVal:string|null) => {
  const illust = getIllustData(iconVal);
  if (!illust || !illust.fileName) return '';
  return `${IMG_URL}/cat_img/${illust.fileName}`
}