
const initialState= {
    loading: true,
    list: [],
    showedList: [],
    error: null
}

export const listReducer = (state = initialState, action) => {
    switch(action.type){
        case '@data/init':
            return {
                ...state,
                loading: false,
                list: action.payload.list,
                showedList:action.payload.showedList,
            }

        case '@data/filtered':
            return {
                ...state,
                loading: false,
                showedList:action.payload
            }
        
        case '@data/updating':
            return {
                ...state,
                loading: true
            }
          
        default:
            return state
    }

}

export const initList = list => {
    return{
        type: '@data/init',
        payload: {
            list,
            showedList: list
        }
    }
}

export const changinList = () => {
    return{
        type: '@data/updating'
    } 
}

export const filterList = (list) => {
    return{
        type: '@data/filtered',
        payload: list
    } 
}


