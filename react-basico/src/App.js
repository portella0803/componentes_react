import logo from './logo.svg';
import './App.css';

import Comentario from './components/Comentario';
import { Component } from 'react';

class App extends Component {

  state = {
    comentarios: [
      {
        id: 1234,
        nome: 'João',
        email: 'joao@email.com',
        data: new Date(2020, 3, 19),
        mensagem: 'Olá, tudo bem?'
      },
      {
        id: 5678,
        nome: 'Maria',
        email: 'maria@email.com',
        data: new Date(2020, 3, 21),
        mensagem: 'Olá, tudo bem sim...'
      }
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  adicionarComentario = evento => {
    evento.preventDefault()
    console.log("Adicionando comentário")

    const novoComentario = {...this.state.novoComentario, data: new Date() }

    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: {nome:'', email:'', mensagem:''}
    })
  }

  removerComentario = comentario => {
    let lista = this.state.comentarios
    lista = lista.filter(c => c !== comentario)
    this.setState({comentario: lista})
  }

  digitacaoDoCampo = evento =>{
    const valor = evento.target.value
    const campo = evento.target.name

    this.setState({novoComentario: {...this.state.novoComentario, [campo]: valor}})
  }

  render(){
    return (
      <div className="App">
      <h1>Meu Projeto</h1>

      {this.state.comentarios.map(comentario =>(
        <Comentario 
        key = {comentario.id}
        nome={comentario.nome} 
        email={comentario.email} 
        data={comentario.data} 
        msg={comentario.mensagem}
        OnRemove={this.removerComentario.bind(this, comentario)}
        />
      ))}

      <form method='post' onSubmit={this.adicionarComentario} className='novoComentario'>
        <h2>Adicionar Comentário</h2>
        <div>
          <input type="text" 
          name="nome" 
          value={this.state.novoComentario.nome}
          onChange={this.digitacaoDoCampo}
          placeholder="Digite seu nome" required></input>
        </div>
        <div>
          <input type="email" 
          name="email" 
          value={this.state.novoComentario.email}
          onChange={this.digitacaoDoCampo}
          placeholder="Digite seu email" required></input>
        </div>
        <div>
          <textarea name="mensagem" 
          value={this.state.novoComentario.mensagem} 
          onChange={this.digitacaoDoCampo}
          rows="4" required/>
        </div>
        <button type='submit'>Adicionar comentário</button>
      </form>
      </div>
    );
  }
}

export default App;
