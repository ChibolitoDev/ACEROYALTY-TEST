import React from 'react'
import List from './List'
import Item from './../list/Components/Item';

const arr = [
    <Item img="https://st2.depositphotos.com/1000165/5463/i/450/depositphotos_54636005-stock-photo-two-skateboards.jpg" nombre="pan" precio="132"/>,
    <Item img="https://img.freepik.com/psd-gratis/patinetas-colores-piso_23-2148272654.jpg?w=1380&t=st=1666259797~exp=1666260397~hmac=1dce4cb2d3326d015575214154ab38d199e6d26e836505f31494e1be06339817" nombre="pan" precio="132"/>,
    <Item img="https://i.pinimg.com/564x/e4/6e/4a/e46e4a9a5c58dc181cf15bb1ea8849cf.jpg" nombre="pan" precio="132"/>,
    <Item img="https://i.pinimg.com/564x/96/ca/a9/96caa961966c7c41329e31ab5fc58b9a.jpg" nombre="pan" precio="132"/>,
    <Item img="https://i.pinimg.com/564x/3c/3f/87/3c3f87cd793adb5005e9d8ea7d3df9b2.jpg" nombre="pan" precio="132"/>,
    <Item img="https://i.pinimg.com/564x/80/37/fb/8037fb2d3e0cf616d27165fc6f00f15b.jpg" nombre="pan" precio="132"/>
    ]



const ListPage = () => {
  return (
<List arr={arr}/> 
 )
}

export default ListPage