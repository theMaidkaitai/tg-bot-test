import { useEffect } from 'react'
import './App.css'

const tg = window.Telegram.WebApp

useEffect(() => {
  tg.ready()
}, [])

const onClose = () => {
  tg.close()
}


function App() {

  return (
    <div>
      <button onClick={onClose}>Закрыть</button>
    </div>
  )
}

export default App
