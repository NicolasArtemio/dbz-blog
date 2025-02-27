import Radar from './components/radar/Radar'; 
// import { useFetch } from './hooks'
// import { HomePage } from './pages';



const url = "https://dragonball-api.com/api/characters";

function App() {

  // const { data, error, loading } = useFetch(url);

  // if (loading){
  //   return <div>Cargando...</div>
  // }

  // if (error) {
  //   return <div>Hubo un error: {error.message}</div>
  // }

  return (
    <>
      {/* <div>{JSON.stringify(data)}</div> */}
      <Radar />
      {/* <HomePage /> */}
    </>
  )
}

export default App
