import React, { useEffect, useReducer } from "react";
import reducer, { ACTION_TYPES, initialState } from './reducer';



function App() {
  const [state, despatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        despatch({ type: ACTION_TYPES.SAVEDATA, payload: data })

      } catch (error) {
        despatch({ type: ACTION_TYPES.SETERROR, payload: error })
      }
    }
    despatch({ type: ACTION_TYPES.SETLOADING, payload: true })
    fetchData()
  }, []);

  return (
    <div>
      <h1>
        {state.isLoading ? "Loading...." : JSON.stringify(state)}
      </h1>

    </div>
  )
}

export default App;
