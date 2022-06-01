import React from 'react'
import useApi from '../services/Api'

export default function Home() {
  const filmsOrSeries = useApi()
  console.log(filmsOrSeries);
  return (
    <main>
      <h1>Cornflix</h1>
      {filmsOrSeries === null ? <h1>loading...</h1> :
        filmsOrSeries.map(({id, image, title, crew}) => 
          <div key={id}>
            <h1>{title}</h1>
            <img alt={title} src={image}/>
            <h2>{crew}</h2>
          </div>
        )
      }
    </main>
  )
}
