import { useNavigate  } from "react-router-dom";

const Item = ({img, name, price,id}) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate({
      pathname:"/"+id
    })
  }

  return (
      <div className="max-w-xs max-h-max overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-100 hover:shadow-xl m-3 scale-90 justif">
        <img src={img} className="h-auto w-screen max-h-56 " ></img>
        <p className="text-center m-1 text-gray-700 text-3xl">{name}</p>
        <div className="p-1">
        <p className="text-3xl mb-3 text-center text-gray-700">S/ {price}</p>          
        <button onClick={handleClick} className=" text-2DDxl w-full h-full rounded-md bg-sky-600 mb-2  py-2 text-indigo-100 hover:bg-sky-500 hover:shadow-md duration-75">Ver Detalles</button>
        </div>
      </div>
  )
}

export default Item