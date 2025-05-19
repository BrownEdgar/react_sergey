import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { handleDelete } from './featurs/movieSlice/movieSlice';

function App() {

    const movies = useSelector((state) => state.movie)
    const dispatch = useDispatch()

    console.log(movies);



    return (
        <div className='main_div'>
            <table>
                <tr>
                    <td>Title</td>
                    <td>Genre</td>
                    <td>Stock</td>
                    <td>Rate</td>
                    <td></td>
                </tr>
                {
                    movies.map(movie =>
                        <tr>
                            <td>{movie.Title}</td>
                            <td>{movie.Genre}</td>
                            <td>{movie.Stock}</td>
                            <td>{movie.Rate}</td>
                            <td>
                                <button onClick={() => dispatch(handleDelete(movie.id))}>Delete</button>
                            </td>
                        </tr>
                    )
                }

            </table>
        </div>
    )
}

export default App