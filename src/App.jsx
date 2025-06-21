import React, { useEffect } from 'react'
import './App.css'

function App() {
  const tg = window.Telegram.WebApp

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div>
      <button onClick={onClose}>Закрыть</button>
    </div>
  )
}

export default App
