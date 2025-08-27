import { API_URL } from "@/constants/site";
import CafeFormStore from "@/store/cafeForm";
import useDataStore from "@/store/data";
import Button from "@mui/joy/Button";
import DialogTitle from "@mui/joy/DialogTitle";
import Modal from "@mui/joy/Modal"
import ModalDialog from "@mui/joy/ModalDialog"
import Textarea from '@mui/joy/Textarea';
import axios from "axios";
import React from "react";
import IllustSelector from "./IllustSelector";

interface Props {
  isOpen : boolean,
  close : () => void
}
const CommentEditModal: React.FC<Props> = (props) => {
  const comment:string|null = CafeFormStore(state => state.currentCafe.comment);
  const cafeId:string|null = CafeFormStore(state => state.currentCafe._id)
  const iconVal:string|null = CafeFormStore(state => state.currentCafe.icon);
  const replaceData = CafeFormStore(state => state.replaceData);
  const replaceCafe = useDataStore(state => state.replaceCafes);
  const changeVal = (event : React.ChangeEvent<HTMLTextAreaElement>)=>{
    replaceData('comment', event.target.value);
  }
  const postComment = ()=>{
    axios.post(API_URL + '/api/comment', null, {
      params:{
        cafe_id:cafeId,
        comment:comment,
        icon_val:iconVal
      }
    }).then(res => {
      replaceCafe(res.data);
      props.close();
    })
  }

  return (
    <Modal
      open={props.isOpen}
      onClose={() => props.close()}
    >
      <ModalDialog
        color="warning"
        layout="center"
        size="lg"
        variant="outlined">
          <DialogTitle>コメントを追加</DialogTitle>
        <Textarea
        name="Warning"
        variant="outlined"
        color="warning"
        value={comment?comment:""}
        onChange={changeVal}
        minRows={10}
      />
      <IllustSelector></IllustSelector>
      <Button
        size="md"
        variant="solid"
        color="warning"
        onClick={() => postComment()}>
          コメントする
        </Button>
        </ModalDialog>
    </Modal>
  )
}

export default CommentEditModal;