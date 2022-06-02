import React from 'react'
import useApi from '../services/Api'

import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {
  const filmsOrSeries = useApi()
  console.log(filmsOrSeries);
  return (
    <main>
      <h1>Cornflix</h1>
      {filmsOrSeries === null ? <LoadingSpinner /> :
        filmsOrSeries.map(({id, image, title, crew, year}) => 
          <div key={id}>
            <h1>{title}</h1>
            <img alt={title} src={image}/>
            <h2>{`${crew} - ${year}.`}</h2>
          </div>
        )
      }
    </main>
  )
}
