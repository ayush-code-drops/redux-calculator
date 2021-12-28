import { ADD_COUNTER, REDUCE_COUNTER } from "./actionTypes";


export function addCounter(payload){
return {
  type:ADD_COUNTER,
  payload
}
}

export function reduceCounter(payload){
  return {
    type:REDUCE_COUNTER,
    payload
  }
  }