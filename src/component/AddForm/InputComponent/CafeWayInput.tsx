import ways from "@/testdata/ways"
import FormControl from "@mui/joy/FormControl"
import FormLabel from "@mui/joy/FormLabel"
import Select from "@mui/joy/Select"
import Option from "@mui/joy/Option"
import CafeFormStore from "@/store/cafeForm"
import { TravelTimeProps } from "@/interface/TravelTimeProps"

const CafeWayInput : React.FC = () => {
  const wayList = ways;
  const way = CafeFormStore(state => state.currentCafe.travelTime.way);
  const replaceData = CafeFormStore(state => state.replaceData);
  const changeWay = (event:React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null,
      newValue: string | null) => {
    const travel : TravelTimeProps = CafeFormStore.getState().currentCafe.travelTime;
    const val = newValue===null?'':newValue;
    const data:TravelTimeProps = {...travel, "way":val}
    replaceData('travelTime', data);
  }
  return (
    <FormControl>
      <FormLabel>移動手段</FormLabel>
      <Select value={way} onChange={changeWay}>
        {wayList.map(w => {
          return <Option key={w.key} value={w.value}>{w.str}</Option>
        }
        )}
      </Select>
    </FormControl>
  )
}
export default CafeWayInput;