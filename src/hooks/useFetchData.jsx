import React, { useState, useEffect } from 'react';


function useFetchData(url) {
  const [data, setData] = useState(null);
  const [error, seterror] = useState(null);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => seterror(err))
      .finally(() => setLoading(false))

  }, [url]);

  return [data, loading, error]
}

export default useFetchData;
