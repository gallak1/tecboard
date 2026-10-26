import './card-evento.css';

export function CardEvento ({ evento }) {
    return (
        <div className="card">
            <img src={evento.capa} alt={evento.titulo} className="card-cover" />
            <div className="card-body">
                <p className="tag">
                    {evento.tema.nome}
                </p>
                <p className='data'>
                    {evento.data.toLocaleDateString('pt-BR')}
                </p>
                <h4 className="titulo-card">
                    {evento.titulo}
                </h4>
            </div>
        </div>
    )
}