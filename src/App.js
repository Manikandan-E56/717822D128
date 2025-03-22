import './App.css';
import Auth from "./Auth";
import { Register } from './Register'; // Remove the curly braces since it's a default export
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Register />} />
                <Route path='/Auth' element={<Auth />} />
            </Routes>
        </div>
    );
}

export default App;