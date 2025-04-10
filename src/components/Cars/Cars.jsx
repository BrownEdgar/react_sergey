import './Cars.css'

function Cars({ cars, handleToggle, status, title }) {

  const renderSlice = (id, deletedAt) => {
    return (
      status === 'active'
        ? (
          <button
            onClick={() => handleToggle(id, 'delete')}
            className='delete'
          >
            Delete This post
          </button>
        ) : (
          <>
            <p className='deletedAt'>Deleted in: {deletedAt}</p>
            <button onClick={() => handleToggle(id, 'restore')} className='Restore'>Restore</button>
          </>
        )
    )
  }

  return (
    <>
      <h1>{title}</h1>
      <div className="Cars">
        {
          cars
            .filter(car => status === 'active' ? !car.deletedAt : car.deletedAt)
            .map(({ id, name, price, color, deletedAt }) => {
              return (
                <div key={id} className='archive'>
                  <h1>{name}</h1>
                  <p>Price:{price}</p>
                  <p>Color:{color}</p>
                  {renderSlice(id, deletedAt)}
                </div>
              )
            })
        }
      </div>
    </>

  );
}

export default Cars;
