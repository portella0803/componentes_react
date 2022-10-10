import logo from './logo.svg';
import './App.css';

import Comentario from './components/Comentario';
import { Component } from 'react';

class App extends Component {

  state = {
    comentarios: [
      {
        nome: 'João',
        email: 'joao@email.com',
        data: new Date(2020, 3, 19),
        mensagem: 'Olá, tudo bem?'
      },
      {
        nome: 'Maria',
        email: 'maria@email.com',
        data: new Date(2020, 3, 21),
        mensagem: 'Olá, tudo bem sim...'
      }
    ]
  }

  render(){
    return (
      <div className="App">
      <h1>Meu Projeto</h1>

      {this.state.comentarios.map((comentario, indice) =>(
        <Comentario 
        key = {indice}
        nome={comentario.nome} 
        email={comentario.email} 
        data={comentario.data} 
        msg={comentario.mensagem}>
        </Comentario>
      ))}
      </div>
    );
  }
}

export default App;
