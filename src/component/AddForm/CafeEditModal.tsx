'use client'
import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import Stack from '@mui/joy/Stack';
import CafeNameInput from './InputComponent/CafeNameInput';
import CafeCityInput from './InputComponent/CafeCityInput';
import FoodMenuInput from './InputComponent/FoodMenuInput';
import CafeAtomInput from './InputComponent/CafeAtomInput';
import CafeGoodInput from './InputComponent/CafeGoodInput';
import CafeBadInput from './InputComponent/CafeBadInput';
import CafeTravelInput from './InputComponent/CafeTravelInput';
import CafeFormStore from '@/store/cafeForm';
import axios from 'axios';
import { API_URL } from '@/constants/site';
import useDataStore from '@/store/data';
import { CafeProps } from "@/interface/CafeProps";
import OpenDayInput from './InputComponent/OpenDayInput';

interface Props {
  isOpen: boolean,
  onClose: () => void
}
const CafeEditModal: React.FC<Props> = (props: Props) => {
  const cafe: CafeProps = CafeFormStore(state => state.currentCafe);
  const resetData = CafeFormStore(state => state.resetData);
  const replaceData = useDataStore(state => state.replaceCafes);
  const closeModal = () => {
    props.onClose();
    resetData();
    // console.log(cafe);
  }
  const addCafe = () => {
    axios.post(API_URL + "/api/add", cafe)
      .then(res => {
        replaceData(res.data);
        props.onClose();
        resetData()
      })
  }

  const updateCafe = () => {
    axios.post(API_URL + "/api/update", cafe)
      .then(res => {
        replaceData(res.data);
        props.onClose();
        resetData();
      })
  }

  const click = () => {
    if(cafe._id){
      updateCafe();
    }else{
      addCafe();
    }
  }

  return (
    <Modal open={props.isOpen} onClose={() => closeModal()}>
      <ModalDialog sx={{
        overflowY: 'auto'
      }}>
        <DialogTitle>{cafe._id?'カフェを修正':'カフェを追加'}</DialogTitle>
        <form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            props.onClose();
          }}
        >
          <Stack spacing={1}>
            <CafeNameInput />
            <CafeAtomInput />
            <OpenDayInput />
            <CafeCityInput />
            <FoodMenuInput />
            <CafeGoodInput />
            <CafeBadInput />
            <CafeTravelInput />
            <Button onClick={click}>{cafe._id?'修正する':'追加する'}</Button>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  )
}
export default CafeEditModal;