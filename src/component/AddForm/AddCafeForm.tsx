'use client'

import * as React from 'react';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import CafeEditModal from './CafeEditModal';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddCafeForm: React.FC = () => {
  const [isOpen, setOpenFlg] = React.useState<boolean>(false);
  return (
    <>
      <AddCircleIcon sx={{
        fontSize: 48,
        position: 'fixed',
        bottom: 15, right: 15,
        color: '#b75000'
      }}
        onClick={() => setOpenFlg(true)} />
      <CafeEditModal
        isOpen={isOpen}
        onClose={() => setOpenFlg(false)}>
      </CafeEditModal>
    </>
  )
}

export default AddCafeForm;