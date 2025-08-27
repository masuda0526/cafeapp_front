import { City } from "@/interface/City";
import SearchParamStore from "@/store/SearchParamStore"
import TokushimaCitys from "@/testdata/TokushimaCity";
import Box from "@mui/joy/Box";
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material";

const SearchCityCheckBox: React.FC = () => {
  const tgCitys = SearchParamStore((state) => state.currentSearchParam.tgCities);
  const replaceParam = SearchParamStore((state) => state.setParam);

  const cities = TokushimaCitys;
  const handleClickCheck = (cityId: string) => {
    const oldData: string[] = tgCitys;
    let newData: string[] = [];
    if (oldData.includes(cityId)) {
      newData = oldData.filter(data => data != cityId);
    } else {
      newData = [...oldData, cityId];
    }
    replaceParam('tgCities', newData);
  }
  return (
    <FormControl>
      <FormLabel >市町村を選択</FormLabel>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr', // 2列
          gap: 1, // 行・列の隙間
          mt: 1,
        }}
      >
          {cities.map(city => (
            <FormControlLabel
              control={<Checkbox checked={tgCitys.includes(city.cityId)} onClick={() => handleClickCheck(city.cityId)} />}
              label={city.cityName}
              key={city.cityId} />
          ))}
      </Box>
    </FormControl>
  )
}

export default SearchCityCheckBox