import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { QuemSomos } from './pages/QuemSomos';
import { Contato } from './pages/Contato';
import { Servicos } from './pages/Servicos';
import { ListarEmail } from './pages/ListarEmail';

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
                <Route 
                    path='/listagem'
                    element={<ListarEmail />}
                />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;