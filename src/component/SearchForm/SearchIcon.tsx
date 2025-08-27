import { useState } from "react"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchFormModal from "./SearchFormModal";

const SearchIcon: React.FC = () => {
  const [isOpen, setOpenFlg] = useState<boolean>(false);
  const onclick = () => {
    setOpenFlg(true);
  }
  return (
    <>
      <FilterAltIcon
        onClick={() => onclick()}
        sx={{
          fontSize: 48,
          position: 'fixed',
          bottom: 15, right: 65,
          color: '#b75000'
        }}
      />
      <SearchFormModal
        isOpen={isOpen}
        closeModal={() => setOpenFlg(false)}
      />
    </>
  )
}

export default SearchIcon;