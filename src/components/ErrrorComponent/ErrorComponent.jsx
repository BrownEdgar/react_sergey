import React from "react";
import './ErrorComponent.scss'
function ErrorComponent({ error, resetErrorBoundary }) {
  console.log({ error, resetErrorBoundary });

  return <div className='Error'>
    <div className="Error__box">
      <h1>Something went wrong:</h1>
      <pre>{error.message}</pre>
      <button onClick={() => window.location.reload()}>Refresh page</button>
    </div>
  </div>;
}
export default ErrorComponent