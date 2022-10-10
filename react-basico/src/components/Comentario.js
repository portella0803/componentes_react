import react from 'react';
import './Comentario.css';

//JSX
const Comentario = props => {
    return(
    <div className="Comentario">
        <h2>{props.nome}</h2>
        <p>{props.email}</p>
        <p>{props.msg}</p>
        <p>{props.data.toString()}</p>
    </div>
    );
};

export default Comentario;