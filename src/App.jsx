import './App.css'
import React, { Suspense } from 'react'
import Uncontrolled from './Component/Form/Uncontrolled.jsx'

function App() {
// const [countriesData, setCountriesData] = useState([]);

 const countryLoading = fetch('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json').then(res => res.json());



  return (
    <>
  
  <Suspense fallback={<h1>Loading...</h1>}>
  <Uncontrolled countryLoading ={countryLoading}></Uncontrolled>
  </Suspense>
    
    </>
  )
}

export default App
