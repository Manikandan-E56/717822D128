// filepath: d:\DDON\New folder\my-app\src\App.js

import './App.css';
import Auth from "./Auth";
import { Route, Routes } from 'react-router-dom'
import { Register } from './Register';


function App() {
    return (

            <div className="App">
                <Routes>
                     <Route path='/' element={Register}/>
                     <Route path='/Auth' element={Auth}/>
                </Routes>
            </div>
            
      
    );
}

export default App;