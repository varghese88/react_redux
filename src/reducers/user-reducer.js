const nameInitialStata = {
    user:{
        name:"",
        age:0,
    },
    users:[],
    posts:[],
    isloading:false
}

const NameReducer = (state = nameInitialStata,action) =>{
    switch (action.type) {
        case "SET_USER":
            state = {
                ...state,
                user: {...state.user,name:action.payload.name,age:action.payload.age},
                users:[...state.users,{name:action.payload.name,age:action.payload.age}]
            }
            break;
        case "SET_CURRENT_NAME":
            state = {
                ...state,
                user: {...state.user,name:action.payload},
            }
            break;
        case "SET_CURRENT_AGE":
            state = {
                ...state,
                user: {...state.user,age:action.payload},
            }
            break;
        case "GET_POST_FULFILLED":
            state = {
                ...state,
                isloading: false,
                posts: action.payload.data,
            }
            break;
        case "GET_POST_PENDING":
            state = {
                ...state,
                isloading: true,
            }
            break;
        default:
            break;
    }
    return state
}

export default NameReducer;