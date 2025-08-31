import { Box } from "@mui/material"

interface Props{
  parentFlg:boolean
  viewVal:string,
  parentFunc?:() => void
}

const RadiusCheckBoxVisual : React.FC<Props> = (props) => {
  const outerFunc = () => {
    if(props.parentFunc){
      props.parentFunc();
    }
  }
  const handleClick = () =>{
    outerFunc();
  }

  return (
    <Box sx={{
      fontSize: '16px',
      backgroundColor: props.parentFlg?'#c97e4cff':'#bbbbbb',
      width:'25px',
      height: '25px',
      borderRadius:'13px',
      textAlign: 'center'
    }} onClick={() => handleClick()}>
      {props.viewVal}
    </Box>
  )
}

export default RadiusCheckBoxVisual;