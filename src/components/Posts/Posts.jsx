import Cars from '../Cars/Cars';

function Posts({ cars, handleToggle, }) {
  return (
    <div>

      <Cars status="active" title="Active Cars" handleToggle={handleToggle} cars={cars} />
      <hr />
      <Cars status="archive" title="Archive Cars" handleToggle={handleToggle} cars={cars} />



    </div>
  );
}

export default Posts;
