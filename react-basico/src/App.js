import logo from './logo.svg';
import './App.css';

import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Meu Projeto</h1>
      <Comentario nome="João" email="joao@email.com" data={new Date(2020, 3, 19)} msg="Olá, tudo bem?">
      </Comentario>

      <Comentario nome="Maria" email="maria@email.com" data={new Date(2020, 3, 21)} msg="Olá, tudo bem?">
      </Comentario>
    </div>
  );
};

export default App;
