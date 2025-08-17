import { useState } from "react"
import Link from '@mui/joy/Link';
import { Box } from "@mui/material";

interface Props {
  comment: string | null
}
const CommentArea: React.FC<Props> = (props:Props) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <Box sx={{p:1}}>
      {isOpen ? (
        <>
        <Link
          color="warning"
          level="body-sm"
          underline="hover"
          onClick={() => setOpen(false)}
        >コメントを閉じる</Link>
        <Box
          sx={{ p: 2, border: '1px dashed', borderColor:"#D2691E",borderRadius:1 ,whiteSpace: 'pre-line'}}>{props.comment}</Box>
        </>
      ):(
        <Link
          color="warning"
          level="body-sm"
          underline="hover"
          onClick={() => setOpen(true)}
        >コメントを開く</Link>
      )}
    </Box>
  )
}

export default CommentArea;