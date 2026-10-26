import './titulo-do-formulario.css';

export function TituloDoFormulario(props: any) {
    return (
        <h2 className='titulo-form'>{props.children}</h2>
    )
}