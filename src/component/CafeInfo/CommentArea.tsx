import { useState } from "react"
import Link from '@mui/joy/Link';
import { Box } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import { getIllustUrl } from "@/util/IllustUtil";

interface Props {
  comment: string | null,
  iconVal: string | null,
}
const CommentArea: React.FC<Props> = (props:Props) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const imgUrl = getIllustUrl(props.iconVal);
  const isShowImg = imgUrl!=='' && imgUrl !==null;

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
          sx={{ 
            p: 2, 
            minHeight:'100px',
            border:'1px dashed', 
            borderColor:"#D2691E",
            borderRadius:1 ,
            whiteSpace: 'pre-line', 
            position:'relative'}}
        >
          {props.comment}
          {isShowImg?(
          <AspectRatio variant="plain" ratio="1" sx={{width:'75px',position:'absolute', right:'0', bottom:'0'}}>
            <img 
              src={imgUrl}
              alt="ねこ"
            ></img>
            {/* <img src={getIllustUrl(props.iconVal)} /> */}
          </AspectRatio>
          ):''}
        </Box>
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