import { useState } from 'react'
import Calculator from './components/Calculator'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`app ${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      <Calculator />
    </div>
  )
}

export default App
