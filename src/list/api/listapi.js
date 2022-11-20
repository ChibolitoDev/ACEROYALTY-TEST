const axios = require('axios').default;
const arr ={
        list: [
            {
                id:1,
                 img: "https://st2.depositphotos.com/1000165/5463/i/450/depositphotos_54636005-stock-photo-two-skateboards.jpg",
                 nombre: "skate generico negro",
                 precio: "120"
            },
            {
                id:2,
                 img: "https://img.freepik.com/psd-gratis/patinetas-colores-piso_23-2148272654.jpg?w=1380&t=st=1666259797~exp=1666260397~hmac=1dce4cb2d3326d015575214154ab38d199e6d26e836505f31494e1be06339817",
                 nombre: "skate generico diseño ciudad",
                 precio: "150"
            },            {
                id:3,
                 img: "https://st2.depositphotos.com/1000165/5463/i/450/depositphotos_54636005-stock-photo-two-skateboards.jpg",
                 nombre: "skate generico negro",
                 precio: "120"
            },            {
                id:4,
                 img: "https://st2.depositphotos.com/1000165/5463/i/450/depositphotos_54636005-stock-photo-two-skateboards.jpg",
                 nombre: "skate generico negro",
                 precio: "120"
            }, 
            {
                id:5,
                 img: "https://st2.depositphotos.com/1000165/5463/i/450/depositphotos_54636005-stock-photo-two-skateboards.jpg",
                 nombre: "skate generico negro",
                 precio: "120"
            },            {
                id:6,
                 img: "https://st2.depositphotos.com/1000165/5463/i/450/depositphotos_54636005-stock-photo-two-skateboards.jpg",
                 nombre: "skate generico negro",
                 precio: "120"
            }
        ]
    };
    
const GetList = async() =>{
    const response = await axios.get('url');
    return response == undefined? response: arr;
} 

    export default GetList
    