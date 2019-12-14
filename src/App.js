import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import Home from './pages/Home/Home'
import Register from './pages/Regis/Register'
//import Login from './pages/Login/Login'//memanggil page login, note: aku ga tau cara link dan manggilnya giman pake ahref malah error
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import NotFound from './pages/NotFound/NotFound'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route path="/" exact component={Register} />
        {/* <Route path="/" exact component={Login} /> */}
          {/* <Route path="/" exact component={Home} /> */}
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
