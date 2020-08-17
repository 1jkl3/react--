import {ADD,DEL} from "../store/config";
export const add = (data)=>{
    return {
        type:ADD,
        payload:data
    }
}

export const del = (data)=>{
    return {
        type:DEL,
        payload:data
    }
}