import {SPACEDATA, SPACEDATA_ERROR} from './type';
import axios from 'axios';
//Load User
console.log('in action');
export const spaceValues =(formData) => async dispatch =>{
    console.log("action");
    console.log(formData);
  
    try{
        const res = await axios.get(
          "https://api.spaceXdata.com/v3/launches?limit=100",
          {
            params: formData,
          }
        );

         
        dispatch({
          type: SPACEDATA,
          payload: res.data,
        });

    }
    catch(err)
    {
         dispatch({
           type: SPACEDATA_ERROR,
         });
    }
}
