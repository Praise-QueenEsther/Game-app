import { Routes, Route } from 'react-router-dom';
// import ReactContextPage from '../pages/ReactContextPage'
import ReactContextPage from './pages/ReactContextPage';
import UseCon from './pages/UseCon';

import WelcomeWithSession from './pages/SessionStorage';
import CookieStorage from './Cookie';
import Welcome from './pages/DemoStorage';
import { BrowserStorage } from './pages/StorageTypes';
import GameRoute from './gameAPP/GameRoute';



function App() {
  return (
  
    <Routes>
      <Route path="/" element={<ReactContextPage/>} />
      <Route path='usecon' element={<UseCon/>}></Route>
      <Route path='demo-storage' element={<Welcome/>}></Route>
      <Route path='session' element={<WelcomeWithSession/>}></Route>
      <Route path='cookie' element={<CookieStorage />}></Route>
      <Route path='browser-storage' element={<BrowserStorage/>}></Route>
      <Route path='game' element={<GameRoute />}></Route>

    </Routes>
    
 
  );
}

export default App;