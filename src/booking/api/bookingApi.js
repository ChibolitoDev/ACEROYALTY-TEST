import axios from 'axios'

export const GetItem = async(id) =>{
  const data =await  axios.get('https://wheelmanagerhackdead.herokuapp.com/api/vehicles/'+id).then(response => response.data);
  return data;
} 
