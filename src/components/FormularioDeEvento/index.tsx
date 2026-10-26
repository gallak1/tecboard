import './formulario-de-evento.css';
import { CampoDoFormulario } from "../CampoDoFormulario";
import { TituloDoFormulario } from "../TituloDoFormulario";
import { Button } from '../Button';

export function FormularioDeEvento({ temas, enviaEvento }) {

  function onSubmit(formData: any) {
    const novo_evento = {
      capa: `/card-covers/Imagem_${Math.floor(Math.random() * (1 - 15 + 1)) + 15}.png`,
      tema: temas.find(tema => tema.id == formData.get('tema')),
      data: new Date(formData.get('data')),
      titulo: formData.get('nome')
    };
    
    enviaEvento(novo_evento);
  }

  return (
    <form className='form-evento' action={onSubmit}>
      <TituloDoFormulario>
        Preencha para criar um evento:
      </TituloDoFormulario>
      <div className="fieldset-list">
        <CampoDoFormulario tipo="texto" />
        <CampoDoFormulario tipo="data" />
        <CampoDoFormulario tipo="select" itens={temas} />
      </div>
      <div className="form-actions">
        <Button
          type="submit"
          className="btn-submit-form"
        >
          Criar evento
        </Button>
      </div>
    </form>
  )
}