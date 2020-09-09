import { SPACEDATA, SPACEDATA_ERROR } from "../actions/type";
const initialState={
    spaceData:[],
    error:{},
    loading:true

}
console.log('moviedata reducer')
export default function (state= initialState,action){
const {type,payload}=action;
switch (type) {
  case SPACEDATA:
    console.log("working");
    return {
      ...state,
      spaceData: payload,
      loading: false,
    };
  case SPACEDATA_ERROR:
    return {
      ...state,
      error: payload,
      loading: false,
    };

  default:
    return state;
}
}