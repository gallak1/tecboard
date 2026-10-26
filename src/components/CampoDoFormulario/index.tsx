import './campo-do-formulario.css';
import { Input } from "../Input";
import { Label } from "../Label";
import { Select } from '../Select';

export function CampoDoFormulario(props: any) {

    switch(props.tipo) {
        case 'texto':
            return (
                <fieldset className='fieldset-form'>
                    <Label htmlFor="nome">
                        Qual o nome do evento?
                    </Label>
                    <Input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Ex: Summer dev hits"
                    ></Input>
                </fieldset>
            );
        case 'data':
            return (
                <fieldset className='fieldset-form'>
                    <Label htmlFor="data">
                        Data do evento
                    </Label>
                    <Input
                        type="date"
                        id="data"
                        name="data"
                        placeholder="XX/XX/XXXX"
                    ></Input>
                </fieldset>
            );
        case 'select':
            return (
                <fieldset className='fieldset-form'>
                    <Label htmlFor="tema">
                        Tema do evento
                    </Label>
                    <Select
                        id="tema"
                        placeholder="Selecione uma opção"
                        name="tema"
                        itens={props.itens}
                    ></Select>
                </fieldset>
            );
    }
}