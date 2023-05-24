import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import { useEffect ,useState } from 'react';


//  co useEffect 
function App() {
  const [ data, setData ] = useState (" ")
  console.log(data)
  const [info , setInfo] = useState([])
console.log(info)
useEffect(()=>{
  fetch("/movies")
  .then(res=>res.json())
  .then(data=>setInfo(data))
},[])
// movies.filter(movies).includes(movie.title)
const filterMovies=info.filter((info)=>info.title.toLowerCase().includes(data.toLowerCase()))
//  filterMovies.map((filterMovie)=><div>filterMovie</div>)

console .log(filterMovies)
  return (

    <div className="">
      <Navbar setData={setData}/>
      <div>
        {
          filterMovies.map((movie)=>(
            <div>
              <img src={movie.movie_poster}/>
            </div>
          ))
        }
    
      </div>

    </div>
  );
}

export default App;
