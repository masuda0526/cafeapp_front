import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import CafeEditModal from '../AddForm/CafeEditModal';
import CafeFormStore from '@/store/cafeForm';

interface Props {
  id: string | null
}
const EditButton: React.FC<Props> = (props: Props) => {
  const [isOpen, setOpenFlg] = useState<boolean>(false);
  const setCurrentCafe = CafeFormStore(state => state.setTargetCafe)
  const clickToEdit = (id: string | null) => {
    if (id) {
      setCurrentCafe(id);
      setOpenFlg(true);
    }
  }
  return (

    <>
      <EditIcon
        sx={{ fontSize: 32 , mr:2}}
        onClick={() => clickToEdit(props.id)}
      ></EditIcon>
      <CafeEditModal
        isOpen={isOpen}
        onClose={() => setOpenFlg(false)}
      ></CafeEditModal>
    </>
  )
}
export default EditButton;