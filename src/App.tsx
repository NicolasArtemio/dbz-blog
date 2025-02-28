import { useState, useEffect } from 'react';
import Radar from './components/radar/Radar'; 
import { HomePage } from './pages';

function App() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 10000); 


    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Radar />  
      ) : (
        <HomePage /> 
      )}
    </>
  );
}

export default App;