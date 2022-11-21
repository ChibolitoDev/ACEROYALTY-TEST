import {useEffect, useState} from 'react'
import NavBar from '../../common/navBar';
import ItemDetail from '../itemDetail';
import Buisness from './buisness';
import {GetItem} from '../api/itemDetailapi.js';


const Details = ({}) => {
  const [data, setData] = useState([]);
  const [carga, setCarga] = useState(false);

  useEffect( ()=>{
    async function fetchMyAPI() {
      const id = window.location.pathname;
      await GetItem(id.charAt(id.length-1)).then(response => setData(response)).then(()=> setCarga(true));
    }
    fetchMyAPI();
  },[])




  return (
    <div className="flex flex-col h-screen w-full bg-indigo-50 justify-start items-center">
        <NavBar/>
        <ItemDetail img={data.imageUrl} name ={data.vehicleName} price={data.score} description={data.description} id={data.id}/>
        {
          carga == true? <Buisness name={data.brand.brandName} sales={data.score} stock={data.stock} id={data.id}/>:
          <div></div>
        }
    </div>  
)
}

export default Details