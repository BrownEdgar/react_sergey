import React, { useContext, useState } from "react";
import { MyContext } from './contexts/MyContext';



function C() {
  const [data, setdata] = useState(
    [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1541348263662-e068662d82af?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        model: "Audi",
        yaer: 2023,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cumque soluta in rem cum tempora repudiandae, iste aliquam debitis doloribus.'
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1604108415419-6d4bd73a1c2c?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        model: "Ford",
        yaer: 2023,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cumque soluta in rem cum tempora repudiandae, iste aliquam debitis doloribus.'
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        model: "Mercedes",
        yaer: 2023,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cumque soluta in rem cum tempora repudiandae, iste aliquam debitis doloribus.'
      },
    ]
  );
  const value = useContext(MyContext)
  return <div className='flex'>
    {
      data.map(elem => {
        return (
          <div className="flex__item" key={elem.id}>
            <img src={elem.image} alt={elem.model} />
            <div className="info">
              <h1>{elem.model}</h1>
              <p>{elem.description}</p>
            </div>
          </div>
        )
      })
    }
    <h1>{JSON.stringify(value)}</h1>
  </div>;
}

export default C;
