const initialState={
    basket: JSON.parse(window.localStorage.getItem("basket")) || [],
    wish: JSON.parse(window.localStorage.getItem("wish")) || [],
    searchmodal:false,
}



export default function reducer(state=initialState,action){
    switch(action.type){

        case "SET_BASKET":
        window.localStorage.setItem("basket",JSON.stringify([...action.payload]))
                return {...state,basket:[...action.payload]};

                case "SET_WISH":
                    window.localStorage.setItem("wish",JSON.stringify([...action.payload]))
                    return {...state,wish:[...action.payload]};

                    
                    case "SET_SEARCHMODAL":
                        return {...state,searchmodal:action.payload};
        default:
            return state;
    }
}