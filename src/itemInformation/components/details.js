
import {useEffect, useState} from 'react'
import NavBar from '../../common/NavBar';
import ItemDetail from '../ItemDetail';
import Buisness from './Buisness';
import {GetItem, GetEnterprice} from '../api/itemDetailapi.js';


const Details = ({id}) => {
  const [data, setData] = useState([]);
  const [dataE, setDataE] = useState([]);
  useEffect( ()=>{
  async function fetchMyAPI() {
    await GetItem(id).then(response => setData(response));
    await GetEnterprice(id).then(response => setDataE(response));
  }
  fetchMyAPI();
  console.log(data)
  },[data])


  return (
    <div className="flex flex-col h-screen w-full bg-indigo-50 justify-start items-center">
        <NavBar/>
        <ItemDetail img={data.img} name ={data.name} price={data.price} description={data.description}/>
        <Buisness name={dataE.name} sales={dataE.sales} stock={dataE.stock} id={dataE.id}/>
    </div>  
)
}

export default Details