import TokushimaCitys from "@/testdata/TokushimaCity"
export const decode = (cityId:string) => {
  const target = TokushimaCitys.filter(city => city.cityId === cityId)[0];
  return target.cityName;
}