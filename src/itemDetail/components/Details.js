
import NavBar from './../../common/NavBar';
import ItemDetail from '../ItemDetail';
import Buisness from './Buisness';

const data = {
  img:"https://i.pinimg.com/564x/96/ca/a9/96caa961966c7c41329e31ab5fc58b9a.jpg",
  nombre:"MOTOCICLETA HIDRAULICA",
  precio:"132"
}

const Details = ({id}) => {
  return (
    <div className="flex flex-col h-screen w-full bg-indigo-50 justify-start items-center">
        <NavBar/>
        <ItemDetail img={data.img} nombre={data.nombre}precio={data.precio}/>
        <Buisness/>
    </div>  
)
}

export default Details