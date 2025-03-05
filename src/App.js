import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Alunos from './pages/Alunos'
import Login from './pages/Login';
import Instrutores from './pages/Instrutores';
import Aulas from './pages/Aulas';
import EsqueciSenha from './pages/EsqueciSenha';
import Configuracoes from './pages/Configuracoes';

function App() {
  return (
    <div className="app">
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Alunos" element={<Alunos />} />
            <Route path="/Instrutores" element={<Instrutores />} />
            <Route path="/Aulas" element={<Aulas />} />
            <Route path="/" element={<Login />} />
            <Route path="/EsqueciSenha" element={<EsqueciSenha />} />
            <Route path="/Configuracoes" element={<Configuracoes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}


export default App;
