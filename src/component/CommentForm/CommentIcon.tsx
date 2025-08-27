import CafeFormStore from '@/store/cafeForm';
import ChatIcon from '@mui/icons-material/Chat';
import { useState } from 'react';
import CommentEditModal from './CommentEditModal';

const CommentIcon: React.FC<{ _id: string | null }> = (props) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const resetCurrentCafe = CafeFormStore(state => state.resetData);
  const setTargetCafe = CafeFormStore(state => state.setTargetCafe);
  const open = () => {
    setOpen(true);
    setTargetCafe(props._id);
  }
  const close = () => {
    setOpen(false);
    resetCurrentCafe();
  }

  return (
    <>
      <ChatIcon onClick={open} sx={{fontSize:32, mr:2}}/>
      <CommentEditModal
        isOpen={isOpen}
        close={() => close()}/>
    </>
  )
}

export default CommentIcon;