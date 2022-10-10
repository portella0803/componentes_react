import react from 'react';
import { formatRelative } from 'date-fns'
import {ptBR} from 'date-fns/locale'

import './Comentario.css';
import imagemUsuario from './user.png'

//JSX
const Comentario = props => {
    const estilo = {
        color: 'red',
        padding: '10px',
        fontSize: '30px'
    }


    return(
    <div className="Comentario">
        <img className='avatar_user' src={imagemUsuario} alt={props.nome}/>
        <div className='conteudo'>
            <h2 className='nome'>{props.nome}</h2>
            <p className='email'>{props.email}</p>
            <p className='mensagem'>{props.msg}</p>
            <p className='data'>{formatRelative(props.data, new Date(), { locale:ptBR })}</p>
            <button onClick={props.OnRemove}>&times;</button>
        </div>
    </div>
    );
};

export default Comentario;