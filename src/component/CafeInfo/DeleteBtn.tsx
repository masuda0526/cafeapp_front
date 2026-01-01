import { API_URL } from '@/constants/site';
import useDataStore from '@/store/data';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
interface Props{
  id:string|null,
  cafeName:string
}
const DeleteBtn : React.FC<Props> = (props)=> {
  const replaceCafes = useDataStore(state => state.replaceCafes);
  const handleClick = (cafe_id : string|null):void => {
    if(confirm(`「${props.cafeName}」削除してもよろしいですか？`)){
      axios.get(API_URL + '/api/delete', {
        params:{
          cafe_id:cafe_id
        }
      }).then(res => {
        replaceCafes(res.data);
      })
    }
  }
  return(
    <DeleteIcon
      sx={{fontSize:32, mr:2, color:'#a52a2a'}}
     onClick={() => handleClick(props.id)}/>
  )
}
export default DeleteBtn;