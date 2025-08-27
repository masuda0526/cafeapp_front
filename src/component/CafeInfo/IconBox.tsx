import { Box } from "@mui/material"
import EditButton from "./EditButton";
import { CafeProps } from "@/interface/CafeProps";
import CommentIcon from "../CommentForm/CommentIcon";
import DeleteBtn from "./DeleteBtn";

const IconBox : React.FC<CafeProps> = (props) => {
  return (
    <Box sx={{p:1}}>
      <DeleteBtn 
        _id={props._id}
        cafeName={props.cafeName}
      />
      <EditButton
        _id={props._id}
      ></EditButton>
      <CommentIcon
        _id={props._id}
        ></CommentIcon>
    </Box>
  )
}

export default IconBox;