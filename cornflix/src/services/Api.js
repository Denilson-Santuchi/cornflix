import React from "react";
import axios from "axios";

export default function useApi(index) {
  const baseURL = `https://imdb-api.com/en/API/SearchTitle/k_wpt2r7c0/${index}`;
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL)
      .then((res) => {
        return res.data;
      })
      .then(({results}) => {
        setData(results)
      })
  }, [])
  return data
}
