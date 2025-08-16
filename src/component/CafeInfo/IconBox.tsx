import { Box } from "@mui/material"
import EditButton from "./EditButton";
import { CafeProps } from "@/interface/CafeProps";
import CommentIcon from "../CommentForm/CommentIcon";

const IconBox : React.FC<CafeProps> = (props) => {
  return (
    <Box>
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