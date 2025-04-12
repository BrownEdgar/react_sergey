import React, { useEffect, useState } from "react";
import './App.css'


function App() {

  const [arr, setArr] = useState([
    { id: 1, name: '🚕', color: 'yellow', price: 5800 },
    { id: 4, name: '🚒', color: 'red', price: 35900 },
    { id: 3, name: '🚑', color: 'white', price: 18000 },
    { id: 2, name: '🚌', color: 'yellow', price: 25800 },
    { id: 5, name: '✈️', color: 'white', price: 3e6 },
    { id: 6, name: '🚘', color: 'red', price: 67800 },
    { id: 7, name: '🚔', color: 'black', price: 58400 },
    { id: 8, name: '🚙', color: 'blue', price: 58400 },
  ]);

  const [filteredArray, setfilteredArray] = useState([]);
  const [currenColor, setCurrenColor] = useState('');


  const handleDelete = (id) => {
    const res = arr.filter((elem) => {
      return elem.id !== id
    })
    setArr(res)
  }

  const renderColorsButtons = () => {
    return arr.reduce((acc, next) => {
      !acc.includes(next.color) && acc.push(next.color);
      return acc
    }, [])
  }

  const handleColorChange = (e) => {
    const { tagName, dataset } = e.target;
    if (tagName === 'BUTTON') {
      setCurrenColor(dataset.color)
    }
  }

  useEffect(() => {
    if (currenColor == "") {
      setfilteredArray(arr)
    } else {
      const result = arr.filter(car => car.color === currenColor);
      (result.length > 0)
        ? setfilteredArray(result)
        : setCurrenColor('')
    }
  }, [currenColor, arr]);


  return (
    <div className='App'>

      <div className="buttons" onClick={handleColorChange}>
        {renderColorsButtons().map(color => <button key={color} data-color={color} className={currenColor === color ? "active" : ''}>{color}</button>)}
        {currenColor ? <p className='clear' onClick={() => setCurrenColor('')}>clear filters</p> : null}
      </div>
      <div className="flex">
        {
          filteredArray.map(elem => {
            return (
              <div key={elem.id}>
                <h1>{elem.name}</h1>
                <p>price: {elem.price}</p>
                <p>color: {elem.color}</p>
                <button className="btn__delete" onClick={() => handleDelete(elem.id)}>&#10006;</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
