import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppProvider } from './context'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    {/* 每个里面都有的一种 react 开发 严格模式 */}
    <AppProvider>
      {/* 可以理解为载入context的环境 */}
      <Router>
        {/* 里面有routes 外面包一层router */}
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
