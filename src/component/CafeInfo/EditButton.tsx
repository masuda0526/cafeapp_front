import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import CafeEditModal from '../AddForm/CafeEditModal';
import CafeFormStore from '@/store/cafeForm';

interface Props{
  _id:string|null
}
const EditButton:React.FC<Props> = (props:Props) => {
  const [isOpen, setOpenFlg] = useState<boolean>(false);
  const setCurrentCafe = CafeFormStore(state => state.setTargetCafe)
  const clickToEdit = (id:string|null) => {
    if(id){
      setCurrentCafe(id);
      setOpenFlg(true);
    }
  }
  return (
    
    <>
      <EditIcon
        onClick={()=>clickToEdit(props._id)}
      ></EditIcon>
      <CafeEditModal
        isOpen={isOpen}
        onClose={() => setOpenFlg(false)}
      ></CafeEditModal>
    </>
  )
} 
export default EditButton;