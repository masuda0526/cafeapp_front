'use client'

import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
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


const AddCafeForm: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const resetData = CafeFormStore(state => state.resetData);
  const closeModal = () => {
    setOpen(false);
    resetData();
  }
  const addCafe = () => {
    
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
          {/* <DialogContent>必要な項目を入力して追加ボタンを押してください</DialogContent> */}
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
              <Button type="submit">追加する</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  )
}

export default AddCafeForm;