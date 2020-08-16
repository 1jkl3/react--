// 对数据进行定义（type）与传递（payload）
import {ADD,DEL} from "./config";
export const add = (data)=>{
    return {
        type:ADD,
        payload:data,
        msg:"嘿嘿"
    }
}

export const del = (data)=>{
    return {
        type:DEL,
        payload:data,
        msg:"嘿嘿"
    }
}