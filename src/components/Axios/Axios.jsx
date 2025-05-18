import axios from "axios";
import { useEffect } from "react";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
function Axios() {
  useEffect(() => {
    axios
      .all([axios.get("posts"), axios.get("todos")])
      .then(([posts, todos]) => console.log([posts, todos]));
  }, []);

  return <div className='Axios'></div>;
}

export default Axios;
