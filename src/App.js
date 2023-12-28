import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Dashboard from './Dashboard';
import Settings from './pages/Settings';



const App = () => {
  return (
    <>
      <Router>
         <Routes>
            <Route path='/Dashboard' element={<Dashboard/>} />
            <Route path='/Settings' element={<Settings/>} />
            
         </Routes>
      </Router>
        
        
      
    </>
  )
}

export default App

