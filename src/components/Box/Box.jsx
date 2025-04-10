import './Box.css'

function Box({ title = 'default', desc = "no description", handleClick }) {


  return (
    <div className='box'>
      <h1>{title.length > 12 ? title.slice(0, 12).concat('...') : title}</h1>
      <p>{desc.length > 100 ? desc.slice(0, 100).concat('...') : desc}</p>
      <button onClick={handleClick}>change X</button>

    </div>
  )
}
export default Box;

