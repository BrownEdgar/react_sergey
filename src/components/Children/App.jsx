import React, { useContext } from "react";
import Alert from './Alert/Alert';
import Child from './Child';
import { AlertContext } from '../contexts/Contexts';

function App() {
  const { isOpen, setIsOpen } = useContext(AlertContext)

  return <div className='App'>
    <h1>Modal & props.children</h1>

    {
      isOpen ? (
        <>
          <Alert variant="warning" isOpen={isOpen} setIsOpen={setIsOpen}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, in nisi! Consectetur quam voluptatum praesentium provident illum iste cum quasi.</p>
          </Alert>

        </>
      ) : null
    }
    <hr />
    <Child />
  </div>;
}

export default App;
