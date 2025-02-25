import './App.css'
import { useFetch } from './hooks'

const url = "https://dragonball-api.com/api/characters";

function App() {

  const { data, error, loading } = useFetch(url);

  if (loading){
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>Hubo un error: {error.message}</div>
  }

  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  )
}

export default App
