import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Login from './pages/Login/Login';



const App = () => {
  return (
    <>
      <Router>
         <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/Dashboard' element={<Dashboard/>} />
            <Route path='/Settings' element={<Settings/>} />
            
         </Routes>
      </Router>
        
        
      
    </>
  )
}

export default App

