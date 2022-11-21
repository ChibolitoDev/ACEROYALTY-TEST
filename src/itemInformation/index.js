import Details from './components/details';

import React from 'react'

const DetailedPage = () => {
  const url = window.location.pathname
  return (
<Details id={url.charAt(url.length-1)} />  )
}

export default DetailedPage