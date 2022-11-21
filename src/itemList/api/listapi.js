import axios from 'axios'

    
const GetList = async() =>{
    const data =await  axios.get('https://wheelmanagerhackdead.herokuapp.com/api/vehicles');
    return data;
} 

 export default GetList
    