'use client'

import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import CafeNameInput from './InputComponent/CafeNameInput';
import CafeCityInput from './InputComponent/CafeCityInput';
import FoodMenuInput from './InputComponent/FoodMenuInput';
import CafeAtomInput from './InputComponent/CafeAtomInput';
import CafeGoodInput from './InputComponent/CafeGoodInput';
import CafeBadInput from './InputComponent/CafeBadInput';
import CafeTravelInput from './InputComponent/CafeTravelInput';
import CafeFormStore from '@/store/cafeForm';
import axios from 'axios';
import { BASE_URL } from '@/constants/site';
import useDataStore from '@/store/data';


const AddCafeForm: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const cafe = CafeFormStore(state => state.currentCafe);
  const replaceData = useDataStore(state => state.replaceCafes);
  const resetData = CafeFormStore(state => state.resetData);
  const closeModal = () => {
    setOpen(false);
    resetData();
  }
  const addCafe = () => {
    axios.post(BASE_URL + "/api/add", cafe)
    .then(res => {
      console.log(res);
      replaceData(res.data);
      setOpen(false);
      resetData()
    })
  }
  return (
    <>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        New project
      </Button>
      <Modal open={open} onClose={() => closeModal()}>
        <ModalDialog sx={{
          overflowY: 'auto'
        }}>
          <DialogTitle>カフェを追加する</DialogTitle>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={1}>
              <CafeNameInput />
              <CafeAtomInput />
              <CafeCityInput />
              <FoodMenuInput />
              <CafeGoodInput />
              <CafeBadInput />
              <CafeTravelInput />
              <Button onClick={addCafe}>追加する</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  )
}

export default AddCafeForm;