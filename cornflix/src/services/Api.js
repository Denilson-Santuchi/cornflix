import React from "react";
import axios from "axios";

export default function useApi(string) {
  const baseURL = `https://imdb-api.com/en/API/SearchTitle/k_wpt2r7c0/${string}`;
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL)
      .then(({ data }) => {
        return data;
      })
      .then(({ results }) => {
        setData(results)
      })
  }, [])
  return data
}
