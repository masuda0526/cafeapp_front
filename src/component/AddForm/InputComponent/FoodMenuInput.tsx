import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input"
import React, { useState } from "react"
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CancelIcon from '@mui/icons-material/Cancel';
import CafeFormStore from "@/store/cafeForm";
import { v4 as uuidv4 } from "uuid";
import Box from "@mui/joy/Box";
import FormControl from "@mui/joy/FormControl";

interface FoodTmpMenu {
  key: string,
  value: string
}

const FoodMenuInput: React.FC = () => {
  const menus: string[] = CafeFormStore(state => state.currentCafe.foodMenu);
  const replaceMenus = CafeFormStore(state => state.replaceData);
  const reflectStore = (tmpMenus: FoodTmpMenu[]) => {
    let l: string[] = [];
    tmpMenus.forEach(m => l.push(m.value));
    replaceMenus('foodMenu', l);
  }
  const [tmpMenus, setTmpMenus] = useState<FoodTmpMenu[]>(
    menus.map(m => {
      return { key: uuidv4(), value: m };
    }))
  React.useEffect(() => {
    reflectStore(tmpMenus)
  }, [tmpMenus]);
  const clickPlusMenu = () => {
    setTmpMenus([...tmpMenus, { key: uuidv4(), value: '' }]);
  }
  const clickDelete = (key: string) => {
    setTmpMenus(tmpMenus.filter(m => m.key != key));
  }
  const changeMenu = (key: string, value: string) => {
    setTmpMenus(tmpMenus.map(m => m.key === key ? { ...m, value: value } : m));
  }

  return (
    <>
        <FormLabel>おすすめメニュー</FormLabel>
        {
          tmpMenus.map(m => {
            return (
              <React.Fragment key={m.key}>
                <Input name="food-menu" value={m.value} onChange={e => changeMenu(m.key, e.target.value)}
                  sx={{ width: '100%' }}
                  endDecorator={
                    <CancelIcon onClick={() => clickDelete(m.key)} sx={{
                      color: 'tomato',
                      cursor: 'pointer'
                    }} />
                  }
                />
              </React.Fragment>
            )
          })
        }
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
        <PlaylistAddIcon
          onClick={clickPlusMenu}
          sx={{ cursor: 'pointer' }}
        />
      </Box>
    </>
  )
}
export default FoodMenuInput;