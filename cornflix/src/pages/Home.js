import React from 'react'
import useApi from '../services/Api'

export default function Home() {
  const filmsOrSeries = useApi('lost 2004')
  console.log(filmsOrSeries);
  return (
    <h1>Hello Word!</h1>
  )
}
