'use client'

import SearchParamStore from "@/store/SearchParamStore"
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import { Typography } from "@mui/material";
import SearchTextInput from "./SearchTextInput";
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import SearchCityCheckBox from "./SearchCityCheckBox";
import SearchCommentToggle from "./SearchCommentToggle";
import SearchGoneToggle from "./SearchGoneToggle";

interface Props {
  isOpen: boolean
  closeModal: () => void;
}
const SearchFormModal: React.FC<Props> = (props) => {
  const resetParam: () => void = SearchParamStore(state => state.resetParam);

  return (
    <Modal open={props.isOpen} onClose={() => props.closeModal()}>
      <ModalDialog
        color="warning"
        variant="plain"
        sx={{ position: 'relative', overflowY:'scroll'}}
      >
        <Typography>カフェの絞り込み</Typography>
        <SearchTextInput />
        <SearchGoneToggle />
        <SearchCommentToggle/>
        <SearchCityCheckBox/>
        <FilterAltOffIcon
          sx={{
            fontSize: 36,
            position: 'absolute',
            top: 10, right: 15,
            color: '#999999'
          }}
          onClick={() => resetParam()}
        />
      </ModalDialog>
    </Modal>
  )
}

export default SearchFormModal;