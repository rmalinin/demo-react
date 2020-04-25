import React from 'react';
import logo from './logo.svg';
import './App.css';


const getNames = async (name) => {
console.log(`hello ${name}`)
  const names =  await fetch('http://localhost:5050/getnames')
  const data = await names.json()
  console.log(data)
}



function App() {
  return (
    <div className="App">
      <button onClick={()=> getNames("Mitch")}>Get List</button>
    </div>
  );
}

export default App;
