import { useState } from 'react';
import './App.css';

const App = () => {
  const [flag, setFlag] = useState(false);
  const timeStamp = new Date().toLocaleString()
  const handleClick = () => {
    setFlag((prev) => !prev)
  }
  return (
    <div className='app'>
      {!flag ? (<button className="fade-button" onClick={handleClick}>Click me!</button>) : (<div className='time'>
        {timeStamp}
      </div>)}


    </div>
  )
}

export default App
