import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { QuemSomos } from './pages/QuemSomos';
import { Contato } from './pages/Contato';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path='/'
                    element={<Home />}
                />
                <Route 
                    path='/quemsomos'
                    element={<QuemSomos />}
                />
                <Route
                    path='/contato'
                    element={<Contato />}
                />
                <Route 
                    path='/servicos'
                    element={<Servicos />}
                />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;