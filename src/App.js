import './App.css';

import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Header from './Components/Header';

import HomeScreen from './Screens/Home';

import { StoreContext, StoreProvider } from "./Providers/Store"
import { useContext } from 'react';
import AddFilm from './Screens/AddMovie';


function App() {

    return (
        <StoreProvider>
            <BrowserRouter>

                <Header/>
                
                <Routes>
                    <Route path='/' element={<HomeScreen />}></Route>
                    <Route path='/add-movie' element={<AddFilm />}></Route>
                </Routes>

            </BrowserRouter>
        </StoreProvider>
    )

}
export default App;
