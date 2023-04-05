import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className="App">
      <div className='contenedor' style={{ backgroundColor: color }}>
        <p className='texto-contenedor'>Contenedor</p>
      </div>
      <br/>
      <form>
        <label>Insertar nombre del color</label>
        <br/>
        <input name='color' onChange={(e) => {setColor(e.target.value)}} value={color}/>
      </form>
    </div>
  )
}

export default App
