import './App.css'
import { Route , Routes } from 'react-router-dom';
import Indexpage from './Component/IndexPage.jsx';
import LoginPage from './Component/LoginPage.jsx';
import Layout from './Component/Layout.jsx';
import Register from './Component/Register.jsx';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4000'//default url
function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element= {<Indexpage />}/>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<Register/>}/>
      </Route>
      
    </Routes>
   
  )
}

export default App
