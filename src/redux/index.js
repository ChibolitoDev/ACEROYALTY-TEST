import { combineReducers } from "redux";
import { createStore } from "redux";
import { fetchData } from "./actions";
import {changinList, filterList, initList, listReducer} from "./redux";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    list: listReducer
});

export const store = createStore(rootReducer,composeWithDevTools())


export const aplyFilter = (searchValue, list) => {
    store.dispatch(changinList())
    const lista = list.list

    if(searchValue != '')
   {
     const filtredList = lista.filter(item => {
        return item.title.toLowerCase().includes(searchValue.toLowerCase());
      });

      store.dispatch(filterList(filtredList))
    }
    else{
        store.dispatch(initList(lista))
    }
}

fetchData().then( list => {
    store.dispatch(initList(list))
})

