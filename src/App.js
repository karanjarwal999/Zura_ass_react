import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Transcript from './Pages/Transcript';
import Upload from './Pages/Uplode';
import Account from './Pages/Account';
import Widget_Configurations from './Pages/Widget_Configurations';

function App() {
  return (
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Uplode' element={<Upload/>}/>
          <Route path='/Transcript' element={<Transcript/>}/>
          <Route path='/Account' element={<Account/>}/>
          <Route path='/Widget_Configurations' element={<Widget_Configurations/>}/>
      </Routes>
  );
}

export default App;
