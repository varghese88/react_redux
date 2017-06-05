 
 import axios from "axios";

 export const setUser = (user)=>{
    return {
        type:'SET_USER',
        payload:user
    };
}

export const getUsers = ()=>{
    return {
       type: 'GET_POST',
       payload:axios.get("https://jsonplaceholder.typicode.com/posts")
    }
    // return (dispatch)=>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts")
    //         .then((data)=>{
    //             dispatch({
    //                 type:'GET_POSTS_DATA',
    //                 payload:data
    //             });
    //         })
    // }
}
export const setCurrentName = (name)=> {
    return {
        type:'SET_CURRENT_NAME',
        payload:name
    };
}

export const setCurrentAge = (age)=>{
    return {
        type:'SET_CURRENT_AGE',
        payload:age
    };
}