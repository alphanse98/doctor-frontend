import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import  "./Intex.css"
// import Routing from './Routes/RoutIng.jsx'
import AppRoute from './Routes/AppRoute'
import Heter from './component/Heter'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Heter /> */}
    <AppRoute />
  </React.StrictMode>,
)
