import React from "react";
import axios from "axios";

export default function useApi() {
  const baseURL = 'https://imdb-api.com/en/API/Top250Movies/k_wpt2r7c0';
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL)
      .then(({ data }) => {
        return data;
      })
      .then(({ items }) => {
        setData(items)
      })
  }, [])
  return data
}
