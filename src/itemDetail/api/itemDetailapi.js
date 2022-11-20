const item = {
    name: "Motocicleta promax omg",
    img: "https://i.pinimg.com/564x/80/37/fb/8037fb2d3e0cf616d27165fc6f00f15b.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    price: 120,
    id:1
  }

  const enterprice = {
    name: "YAMAHA HAHAHA",
    sales: 12000,
    stock: 300,
    id:1
  }
export const GetItem = async() =>{
    return item;
} 
 export const GetEnterprice = async() =>{
  return enterprice;
} 
    