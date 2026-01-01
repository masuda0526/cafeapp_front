import { Box } from "@mui/material"
import EditButton from "./EditButton";
import { CafeProps } from "@/interface/CafeProps";
import CommentIcon from "../CommentForm/CommentIcon";
import DeleteBtn from "./DeleteBtn";

const IconBox : React.FC<CafeProps> = (props) => {
  return (
    <Box sx={{p:1}}>
      <DeleteBtn 
        id={props.id}
        cafeName={props.cafeName}
      />
      <EditButton
        id={props.id}
      ></EditButton>
      <CommentIcon
        id={props.id}
        ></CommentIcon>
    </Box>
  )
}

export default IconBox;